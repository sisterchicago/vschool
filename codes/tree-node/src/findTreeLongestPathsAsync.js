/**
 * This function finds the leaf nodes with the greatest depth and
 * returns an array of the paths to these leaf nodes.
 *
 * For example, if the depth of the tree is 5 and there are 3 leaf nodes
 * at this depth, then this function will return an array with 3 paths
 * (each path is an array of `TreeNode`s starting from the root and ending
 * at the leaf node).
 *
 * @param {TreeNode} tree a root tree node
 * @return {Array<Array<TreeNode>>} an array whose items are arrays that
 *   represent path to each leaf node at the greatest depth
 */
async function findTreeLongestPathsAsync (tree) {
    // In case of edgecase for RootNode with no Children.
    const childrenOfRootNode = await tree.getChildrenAsync();
    if (childrenOfRootNode.length <= 0) {
      return [[tree]];
    }
    // Visited Nodes/Paths
    let visited = {};
    // Queue for Breadth First Traversal of Binary Tree
    let queue = [];
    queue.push(tree);
    // Breadth First Traversal tracking Nodes visited & Depth & Path
    while(queue.length > 0) {
      const currentNode = queue.shift();
      if (visited[currentNode.data.depth] && visited[currentNode.data.depth].length > 0) {
        // This array is to put Nodes & Depth
        const path = [currentNode];
        let travelledNode = currentNode;
  
        while (travelledNode.parent !== null) {
          path.unshift(travelledNode.parent);
          travelledNode = travelledNode.parent;
        }
  
        visited[currentNode.data.depth].push({
          node: currentNode,
          path: path
        });
      } else {
        // This array is to put Nodes & Paths
        const path = [currentNode];
        let travelledNode = currentNode;
  
        while (travelledNode.parent !== null) {
          path.unshift(travelledNode.parent);
          travelledNode = travelledNode.parent;
        }
  
        visited[currentNode.data.depth] = [{
          node: currentNode,
          path: path
        }]
      }
      // Children of CurrentNode
      const childrenOfCurrentNode = await currentNode.getChildrenAsync();
      if (childrenOfCurrentNode && childrenOfCurrentNode.length > 0) {
        for(const child of childrenOfCurrentNode) {
          queue.push(child);
        }
      }
    }
    // Traversal will yield arrays of the Nodes at each depth.
    const listOfDepths = Object.keys(visited);
    const deepestNodes = visited[listOfDepths[listOfDepths.length - 1]];
    const listOfPaths = deepestNodes.map(node => node.path)
    return listOfPaths
  };