import * as contentful from 'contentful';
import {INLINES, BLOCKS} from "@contentful/rich-text-types";
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
        },
        [INLINES.HYPERLINK]: node => {
            console.log(node);
            if (node.data.uri.includes("youtube.com")) {
                const match = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/.exec(
                    node.data.uri
                )
                const videoId =
                    match && match[7].length === 11 ? match[7] : null
                return (
                    videoId && (
                        <section className="video-container">
                            <iframe
                                className="video"
                                title={`https://youtube.com/embed/${videoId}`}
                                src={`https://youtube.com/embed/${videoId}`}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </section>
                    )
                )
            } else {
                return (
                    <a href={node.data.uri}>{node.content[0].value}</a>
                )
            }
        },
    }
}

export const fetchThoughts = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'thought',
            select: 'fields,sys,metadata',
            order: '-sys.createdAt',
        });
        return response.items;
    } catch (error) {
        console.error('error fetching thoughts:', error);
        throw error;
    }
};

export const fetchSites = async() => {
    try {
        const response = await client.getEntries({
            content_type: 'site',
            select: 'fields,sys,metadata',
            order:'sys.createdAt',
        });
        return response.items;
    } catch (error) {
        console.error('error fetching sites:', error);
        throw error;
    }
};

export const fetchTodo = async() => {
    try {
        const response = await client.getEntries({
            content_type: 'todo',
            select: 'fields',
        });
        console.log(response.items[0]);
        console.log('todo fetched');
        return response.items[0];
    } catch (error) {
        console.error('error fetching todo items:', error);
        throw error;
    }
};