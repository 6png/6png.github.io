import * as contentful from 'contentful';
import {BLOCKS} from "@contentful/rich-text-types";
import React from "react";

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const renderOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return (
                <img
                    src={`https://${node.data.target.fields.file.url}`}
                    height={node.data.target.fields.file.details.image.height}
                    width={node.data.target.fields.file.details.image.width}
                    alt={node.data.target.fields.description}
                />
            )
        }
    }
}

export const getThoughts = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'thought',
            select: 'fields,sys',
            order: '-sys.createdAt',
        });
        console.log('fetched');
        return response.items;
    } catch (error) {
        console.error('error fetching thoughts:', error);
        throw error;
    }
};

export const getPinnedThoughts = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'thought',
            select: 'fields,sys',
            'metadata.tags.sys.id[all]': 'pin',
        });
        console.log('pinned fetched');
        return response.items;
    } catch (error) {
        console.error('error fetching pinned thoughts:', error);
        throw error;
    }
};

export const getPermanentSites = async() => {
    try {
        const response = await client.getEntries({
            content_type: 'site',
            select: 'fields,sys',
            'metadata.tags.sys.id[all]': 'permanent',
        });
        console.log('sites fetched');
        return response.items;
    } catch (error) {
        console.error('error fetching permanent sites:', error);
        throw error;
    }
};

export const getTemporarySites = async() => {
    try {
        const response = await client.getEntries({
            content_type: 'site',
            select: 'fields,sys',
            'metadata.tags[exists]': false,
        });
        console.log('sites fetched');
        return response.items;
    } catch (error) {
        console.error('error fetching temporary sites:', error);
        throw error;
    }
};