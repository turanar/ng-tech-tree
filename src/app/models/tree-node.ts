import {Tech} from "./tech";

export interface TreeNode {
  id: number;
  parentId: number;
  treeId: number;

  prelim: number;
  modifier: number;
  leftNeighborId: string;
  link: string;
  drawLineThrough: boolean;
  collapsable: boolean;
  collapsed: boolean;
  text: any;

  X: number;
  Y: number;
  connStyle: any;
  connector: any;
  height: number;
  image: string;
  meta: any;
  children: number[];

  getTree() : any;
  getTreeConfig() : any;
  getTreeNodeDb() : any;
  lookupNode(nodeId: number) : any;
  childAt(index:number) : any;
  parent(): TreeNode;
  hide() : any;
  show() : any;
  collapse() : any;
  expand() : any;
}
