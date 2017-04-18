const getTitleAndContent = (item) => {
    return {
        title: item.Content,
        content: item.Text,
        url: item.FirstURL,
    }
}

export default function( response ) {

    console.log(response);

    return {
        definition: {
            content: response.AbstractText
        },
        list: [
            ...response.RelatedTopics.map(getTitleAndContent),
            ...response.Results.map(getTitleAndContent)
        ]
    }
}