const express = require('express');
const app = express();
// const { glbToGltf } = require('gltf-pipeline');
const fs = require('fs');
const core = require('@loaders.gl/core');
const { load } = core;
const { GLTFLoader, GLTFScenegraph, postProcessGLTF } = require('@loaders.gl/gltf');
// Read the GLTF file
const gltfRaw = fs.readFileSync('/mnt/d/3js/final.glb');
// Parse the GLTF data
let parsedGltf;
(async () => {
    try {


        const gltfData = await load(gltfRaw, GLTFLoader, { gltf: { postProcess: true } });


        parsedGltf = gltfData.json;

    } catch (error) {
        console.error('Failed to parse GLTF: 41', error);
    }
})();


// API to get paginated nodes
app.get('/api/nodes', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the requested page from query parameters
    const limit = parseInt(req.query.limit) || 1; // Set the items per page limit

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const slicedNodes = parsedGltf.nodes.slice(startIndex, endIndex);

    res.json({
        totalNodes: parsedGltf.nodes.length,
        currentPage: page,
        totalPages: Math.ceil(parsedGltf.nodes.length / limit),
        nodes: slicedNodes,
    });
});

// API to get paginated materials
app.get('/api/materials', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the requested page from query parameters
    const limit = parseInt(req.query.limit) || 10; // Set the items per page limit

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const slicedMaterials = parsedGltf.materials.slice(startIndex, endIndex);

    res.json({
        totalMaterials: parsedGltf.materials.length,
        currentPage: page,
        totalPages: Math.ceil(parsedGltf.materials.length / limit),
        materials: slicedMaterials,
    });
});

// API to get paginated meshes
app.get('/api/meshes', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the requested page from query parameters
    const limit = parseInt(req.query.limit) || 10; // Set the items per page limit

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const slicedMeshes = parsedGltf.meshes.slice(startIndex, endIndex);

    res.json({
        totalMeshes: parsedGltf.meshes.length,
        currentPage: page,
        totalPages: Math.ceil(parsedGltf.meshes.length / limit),
        meshes: slicedMeshes,
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
