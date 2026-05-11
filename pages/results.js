import React, {PureComponent} from 'react';
import {loadFireBase} from "lib/db";
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import Layout from "src/ui/Layout";
import {PageHeadBox, PageHeadTitle} from "src/ui/components";

export default class Results extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    static async getInitialProps() {
        let fireBase = await loadFireBase();

        if (!fireBase.firestore) {
            console.warn('Firebase not initialized. Returning empty results.');
            return { assessments: [] };
        }

        let collectionName = "";
        let env = process.env.NODE_ENV === "production" ? "[PROD] " : "[DEV] ";
        collectionName += env;
        let now = new Date();
        let dd = String(now.getDate()).padStart(2, '0');
        let mm = String(now.getMonth() + 1).padStart(2, '0');
        let yyyy = now.getFullYear();
        let today = `${dd}.${mm}.${yyyy}`;
        collectionName += today;
        console.log("Collection: ", collectionName);
        const collectionRef = collection(fireBase.firestore, collectionName);
        const q = query(collectionRef, orderBy('timeCreated', 'desc'));
        const snapshot = await getDocs(q);
        let data = [];
        snapshot.forEach((doc) => {
            data.push(
                Object.assign(
                    {id: doc.id}, doc.data()
                )
            )
        });
        return {assessments: data};
    }

    render() {
        let resultsStr = JSON.stringify(this.props.assessments, null, 3);
        return <Layout>
            <PageHeadBox>
                <PageHeadTitle title={"Results"}/>
            </PageHeadBox>
            <pre>{resultsStr}</pre>
        </Layout>
    }
};