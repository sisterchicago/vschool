/**
 * This function is used to load data that was read from file and
 * parsed as JSON.
 * See `./test/data/tree1.json` for example input data.
 *
 * @param  {Object} obj an object that stores tree data
 * @return {TreeNode} the root `TreeNode`
 */

 import TreeNode from "../TreeNode.js";

 export default function loadTree (obj) {
   
   // This is the creation of the RootNode.
   const rootNode = new TreeNode(null, {
     label: obj.data,
     depth: 0,
     childData: obj.children
   });
 
   // Function to load the Children of the RootNode recursively, as well as Leaf Nodes as instances of TreeNode.
   const recuresiveLoad = (parent, childData) => {
     if (!childData) {
       return;
     }
     const newChildren = [];
     for (const child of childData) {
       const childNode = new TreeNode(parent, {
         label: child.data,
         depth: parent.data.depth + 1,
         childData: child.children
       });
       newChildren.push(childNode);
       parent.addChild(childNode);
     }
     for (const childNode of newChildren) {
       // Each child needs the same for its children
       if (!childNode.data.childData || childNode.data.childData.length <= 0) {
         continue;
       } else {
         recuresiveLoad(childNode, childNode.data.childData);
       }
     }
   };
 
   recuresiveLoad(rootNode, obj.children);
 
   return rootNode;
 };