import React, {useState} from "react";
import {Box, Grow, Stack, Typography} from "@mui/material";
import img from './placeholder.png'


const longString = "The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.[2]";
const tree = {
    "id": "node-1",
    "label": "Scene 1",
    "title": "Scene 1",
    "description": "<p>You enter a forest and see a path</p>",
    "imageUrl": {},
    "fileName": "Screenshot 2024-07-11 at 2.58.47 PM.png",
    "children": [
        {
            "id": "node-2",
            "label": "Decision 1",
            "description": "Go right",
            "children": []
        },
        {
            "id": "node-3",
            "label": "Decision 2",
            "description": "* Go left",
            "children": [
                {
                    "id": "node-4",
                    "label": "Scene 2",
                    "title": "Scene 2",
                    "description": "<p>As you enter the left path, it starts to rain.</p>",
                    "imageUrl": "",
                    "fileName": "",
                    "children": [
                        {
                            "id": "node-5",
                            "label": "Decision 3",
                            "description": "* Run for cover under a tree",
                            "children": [
                                {
                                    "id": "node-7",
                                    "label": "Scene 3",
                                    "title": "Scene 3",
                                    "description": "<p>Under the tree you are safe from the rain</p>",
                                    "imageUrl": "",
                                    "fileName": "",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": "node-6",
                            "label": "Decision 4",
                            "description": "Turn around",
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
}

const PageContent: React.FC = () => {
    const [checked, setChecked] = React.useState(true);

    const [currentNode, setCurrentNode] = useState(tree);

    const handleDecisionClick = (node: any) => {
        // Check if the clicked node has children and set the first child (scene node) as the current node
        const nextNode = node.children && node.children.length > 0 ? node.children[0] : node;
        setCurrentNode(nextNode);
        setChecked(false);
        setTimeout(() => {
            setChecked(true);

        }, 600);
    };

    // @ts-ignore
    const Decision = ({node}) => {
        return (
            <Box
                sx={{
                    minWidth: 600,
                    height: 'auto',
                    minHeight: 35,
                    borderRadius: .5,
                    padding: 1,
                    backgroundColor: '#5B2981ff',
                    '&:hover': {
                        bgcolor: '#C27AF4ff',
                    },
                }}
                key={node.id}
                onClick={() => handleDecisionClick(node)}
            >
                <Typography textAlign={'center'} sx={{color: 'white', fontWeight: 600}}>
                    {node.description}
                </Typography>
            </Box>
        );
    }
    return (
        <Grow in={checked}>
            <Stack spacing={1} alignItems='center' sx={{padding: '0px 40px 5px 40px'}}>
                <Typography variant='h6'>{currentNode.title}</Typography>
                <img src={img} alt='Scene' style={{width: '100%', height: 'auto'}}/>
                <div dangerouslySetInnerHTML={{__html: currentNode.description}}/>
                <Stack spacing={2} alignItems='center'>
                    {currentNode.children.map(child => (
                        <Decision node={child}/>
                    ))}
                </Stack>
            </Stack>
        </Grow>
    );
};
export default PageContent;