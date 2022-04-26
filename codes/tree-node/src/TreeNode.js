function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  export default class TreeNode {
    /**
     * @param {TreeNode} parent direct parent tree node or `null` if this node is a root node
     * @param {Object} data any data that should be attached to tree node
     */
    constructor (parent, data) {
      this.parent = parent;
      this.data = data;
      this.children = undefined;
    }
  
    /**
     * @return {TreeNode} the direct parent of this node or `null` if root node
     */
    getParent () {
      return this.parent;
    }
  
    /**
     * @return data associated with node
     */
    getData () {
      return this.data;
    }
  
    /**
     * Fetch the children of this node which is asynchronous.
     * NOTE: This is asynchronously to make the problem a little more
     * challenging.
     *
     * @return {Promise<Array>} a promise that resolves to the children
     *  of the node
     */
    async getChildrenAsync () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.children || []);
        }, getRandomInt(100));
      });
    }
  
    /**
     * Appends a child to this tree node
     * @param  {TreeNode} node a tree node
     */
    /**
     * This does not accomplish appending child to a Node, so I made a change.
     * setChildren (children) {
     *  this.children = children || [];
     * }*/ 
      addChild (node) {
        this.children.push(node);
      }
  };