import * as contentful from 'contentful';

const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getEntries = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'thought',
            select: 'fields,sys',
            order: '-sys.createdAt',
        });
        console.log('fetched');
        return response.items;
    } catch (error) {
        console.error('error fetching entries:', error);
        throw error;
    }
};

export const getPinnedEntries = async () => {
    try {
        const response = await client.getEntries({
            content_type: 'thought',
            select: 'fields,sys',
            'metadata.tags.sys.id[all]': 'pin',
        });
        console.log('pinned fetched');
        return response.items;
    } catch (error) {
        console.error('error fetching entries:', error);
        throw error;
    }
};