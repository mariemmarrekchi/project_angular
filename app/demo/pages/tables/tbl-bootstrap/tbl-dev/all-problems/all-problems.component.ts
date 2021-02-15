import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-problems',
  templateUrl: './all-problems.component.html',
  styleUrls: ['./all-problems.component.scss']
})
export class AllProblemsComponent implements OnInit {

  isLinear = false;


  problems = [
    {
      name: "Red Blue Graph",
      description: 'You are given a bipartite graph: the first part of this graph contains n1 vertices, the second part contains n2 vertices, and there are m edges. The graph can contain multiple edges. \
             Initially, each edge is colorless.For each edge, you may either leave it uncolored(it is free), paint it red(it costs r coins) or paint it blue(it costs b coins).No edge can be painted red and blue simultaneously.'
    },
    {
      name: "Red Blue Graph",
      description: 'You are given a bipartite graph: the first part of this graph contains n1 vertices, the second part contains n2 vertices, and there are m edges. The graph can contain multiple edges. \
             Initially, each edge is colorless.For each edge, you may either leave it uncolored(it is free), paint it red(it costs r coins) or paint it blue(it costs b coins).No edge can be painted red and blue simultaneously.'
    },
    {
      name: "Red Blue Graph",
      description: 'You are given a bipartite graph: the first part of this graph contains n1 vertices, the second part contains n2 vertices, and there are m edges. The graph can contain multiple edges. \
             Initially, each edge is colorless.For each edge, you may either leave it uncolored(it is free), paint it red(it costs r coins) or paint it blue(it costs b coins).No edge can be painted red and blue simultaneously.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
