import {Component, HostBinding} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener, MatTreeNestedDataSource,
  MatTreeNode,
  MatTreeNodeDef, MatTreeNodeOutlet,
  MatTreeNodePadding, MatTreeNodeToggle
} from "@angular/material/tree";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { FlatTreeControl, NestedTreeControl } from "@angular/cdk/tree";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 *
 * 具有嵌套结构的食物数据。每个节点都有一个名称和一个可选的子节点列表。
 *
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
  selector: 'app-page08'
  , standalone: true
  , templateUrl: 'page08.component.html'
  ,
  imports: [NgForOf, NgIf, MatTree, MatTreeNode, MatTreeNodeDef, MatIcon, MatIconButton, MatTreeNodePadding, MatTreeNodeToggle, MatNestedTreeNode, MatTreeNodeOutlet]
  , styleUrl: 'page08.component.scss'
})

export class Page08Component {

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {

  }

  ngOnInit() {
    this.getTreeDataApi()
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  getTreeDataApi() {
    setTimeout(() => {
      this.dataSource.data = TREE_DATA
    }, 3000)
  }
}
