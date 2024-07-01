import {Component, HostBinding} from "@angular/core";
import {NgForOf, NgIf} from "@angular/common";
import {
  MatTree,
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodePadding, MatTreeNodeToggle
} from "@angular/material/tree";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { FlatTreeControl } from "@angular/cdk/tree";

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-page08'
  , standalone: true
  , templateUrl: 'page08.component.html'
  ,
  imports: [NgForOf, NgIf, MatTree, MatTreeNode, MatTreeNodeDef, MatIcon, MatIconButton, MatTreeNodePadding, MatTreeNodeToggle]
  , styleUrl: 'page08.component.scss'
})

export class Page08Component {

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
