(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[6136],{8817:(e,t,o)=>{"use strict";o.r(t),o.d(t,{data:()=>d});const d={key:"v-0ec4ef36",path:"/project-management/docs/labels.html",title:"Labels (docs repository)",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Short circuit",slug:"short-circuit",children:[]},{level:2,title:"Enforcement of label system",slug:"enforcement-of-label-system",children:[]},{level:2,title:"Area-*",slug:"area",children:[]},{level:2,title:"Category-*",slug:"category",children:[]},{level:2,title:"dependencies",slug:"dependencies",children:[]},{level:2,title:"help wanted",slug:"help-wanted",children:[]},{level:2,title:"Issue-*",slug:"issue",children:[]},{level:2,title:"Needs-*",slug:"needs",children:[]},{level:2,title:"PR-*",slug:"pr",children:[]},{level:2,title:"Resolution-*",slug:"resolution",children:[]},{level:2,title:"Scope-*",slug:"scope",children:[]}],filePathRelative:"project-management/docs/labels.md"}},92:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});const d=(0,o(6252).uE)('<h1 id="labels-docs-repository"><a class="header-anchor" href="#labels-docs-repository">#</a> Labels (docs repository)</h1><table><thead><tr><th>Label</th><th>Color</th></tr></thead><tbody><tr><td>Category-Decision</td><td><code>#000000</code></td></tr><tr><td>Category-Management</td><td><code>#adffff</code></td></tr><tr><td>Category-Spec</td><td><code>#006666</code></td></tr><tr><td>Category-User</td><td><code>#00ffff</code></td></tr><tr><td>dependencies</td><td><code>#0366d6</code></td></tr><tr><td>help wanted</td><td><code>#e6e600</code></td></tr><tr><td>Issue-Bug</td><td><code>#d73a4a</code></td></tr><tr><td>Issue-Feature</td><td><code>#5319e7</code></td></tr><tr><td>Issue-Question</td><td><code>#ca00e0</code></td></tr><tr><td>Needs-Attention</td><td><code>#ffff00</code></td></tr><tr><td>Needs-Feedback</td><td><code>#737300</code></td></tr><tr><td>Needs-Translation</td><td><code>#f2c6b0</code></td></tr><tr><td>Needs-Triage</td><td><code>#0052cc</code></td></tr><tr><td>PR-AutoMerge</td><td><code>#10ff10</code></td></tr><tr><td>Resolution-Answered</td><td><code>#CCFFCC</code></td></tr><tr><td>Resolution-Duplicate</td><td><code>#cfd3d7</code></td></tr><tr><td>Resolution-External</td><td><code>#ffffff</code></td></tr><tr><td>Resolution-FixCommitted</td><td><code>#85ff85</code></td></tr><tr><td>Resolution-Invalid</td><td><code>#cfd3d7</code></td></tr><tr><td>Resolution-Released</td><td><code>#007300</code></td></tr><tr><td>Resolution-Wontfix</td><td><code>#ffffff</code></td></tr><tr><td>Scope-Docs</td><td><code>#000080</code></td></tr><tr><td>Scope-Meta</td><td><code>#000080</code></td></tr><tr><td>Scope-Website</td><td><code>#000080</code></td></tr></tbody></table><h2 id="short-circuit"><a class="header-anchor" href="#short-circuit">#</a> Short circuit</h2><p>If an issue or PR gets any of:</p><ul><li><code>Resolution-Duplicate</code></li><li><code>Resolution-Invalid</code></li><li><code>Resolution-Wontfix</code></li></ul><p>then:</p><ul><li>The processing of it is terminated immediately. It will be closed.</li><li>It does not need other labels.</li><li>Core maintainers will ignore it and not respond to it in future.</li></ul><h2 id="enforcement-of-label-system"><a class="header-anchor" href="#enforcement-of-label-system">#</a> Enforcement of label system</h2><p>When a thread is not short circuited, it must meet label requirements. Otherwise, it is tagged improperly and needs a tag fix.</p><ul><li>An issue or PR must have one and only one <code>Scope-*</code> label. This also implies that a thread must focus on only one scope.</li><li>If a thread has <code>Scope-Docs</code>, it must have proper <code>Category-*</code> labels.</li><li>An issue must have one and only one <code>Issue-*</code> label.</li><li>An issue must have one and only one <code>Resolution-*</code> label, when it is closed.</li></ul><h2 id="area"><a class="header-anchor" href="#area">#</a> <code>Area-*</code></h2><p>Reserved for future use.</p><h2 id="category"><a class="header-anchor" href="#category">#</a> <code>Category-*</code></h2><p>Indicates which part of the documentation the issue or PR belongs to.</p><p>Only applies to threads with <code>Scope-Docs</code> label.</p><p>The hue of these labels is 180.</p><ul><li><code>Category-Decision</code>: Decisions on what should or should not be implemented, or general guidelines.</li><li><code>Category-Management</code>: Conventions and maintainers&#39; behavior.</li><li><code>Category-Spec</code>: Specifications of features.</li><li><code>Category-User</code>: User guide.</li></ul><h2 id="dependencies"><a class="header-anchor" href="#dependencies">#</a> <code>dependencies</code></h2><p>This label is automatically created by GitHub. We don&#39;t use it.</p><h2 id="help-wanted"><a class="header-anchor" href="#help-wanted">#</a> <code>help wanted</code></h2><p>Extra attention is needed. Looking for help.</p><p>This is a special label recognized by GitHub. Do not change its name.</p><p>In theory, it should be called <code>Needs-Help</code>.</p><h2 id="issue"><a class="header-anchor" href="#issue">#</a> <code>Issue-*</code></h2><p>Indicates the type of an issue.</p><p>Only applies to issues.</p><p>These labels have distinct colors, so that they can be told from each other at a glance.</p><ul><li><code>Issue-Bug</code>: Something isn&#39;t working.</li><li><code>Issue-Feature</code>: New feature requests, or enhancement of existing features.</li><li><code>Issue-Question</code>: Questions or discussions. Further information is requested.</li></ul><h2 id="needs"><a class="header-anchor" href="#needs">#</a> <code>Needs-*</code></h2><p>Indicates that the thread needs a specific type of response.</p><p>Except <code>Translation</code> and <code>Triage</code>, the hue of these labels is 60.</p><ul><li><code>Needs-Attention</code>: Highest priority. Look at this as soon as possible.</li><li><code>Needs-Feedback</code>: The original author of the issue or PR needs to come back and respond to something. <ul><li>The Stale bot adds this label when the thread has not had recent activity (go stale).</li><li>Maintainers may add this label to show that we are waiting for the original author.</li></ul></li><li><code>Needs-Translation</code>: Please translate to English.</li><li><code>Needs-Triage</code>: It&#39;s a new issue. <ul><li>GitHub issue templates are set to add this label.</li></ul></li></ul><h2 id="pr"><a class="header-anchor" href="#pr">#</a> <code>PR-*</code></h2><p>Reserved for future use.</p><h2 id="resolution"><a class="header-anchor" href="#resolution">#</a> <code>Resolution-*</code></h2><p>Indicates the final state of an issue or PR.</p><p><code>Resolution-Duplicate</code> and <code>Resolution-Invalid</code> apply to both issues and PRs. Others only apply to issues.</p><p>Except <code>Duplicate</code> and <code>Invalid</code>, the hue of these labels is 120.</p><ul><li><code>Resolution-Answered</code>: Discussion closed. <ul><li>Add this label when an issue with <code>Issue-Question</code> label is closed.</li></ul></li><li><code>Resolution-Duplicate</code>: This issue or pull request already exists.</li><li><code>Resolution-External</code>: Outside of our control/codebase. Usually related to an upstream component.</li><li><code>Resolution-FixCommitted</code>: Fix is checked in, but it might be a few weeks until a release. <ul><li>Add this label when an issue is fixed but not released.</li><li>Remove this label when the fix is published to the documentation website.</li></ul></li><li><code>Resolution-Invalid</code>: This does not seem right, or contain any valid or useful information. It&#39;s discarded. <ul><li>Includes those that cannot be reproduced.</li></ul></li><li><code>Resolution-Released</code>: It&#39;s generally available. <ul><li>Add this label when the fix is published to the documentation website.</li></ul></li><li><code>Resolution-Wontfix</code>: This will not be worked on. Because it&#39;s by design.</li></ul><h2 id="scope"><a class="header-anchor" href="#scope">#</a> <code>Scope-*</code></h2><p>Indicates which general part of the project the issue or PR belongs to.</p><ul><li><code>Scope-Docs</code>: Related to the content of documentation. <ul><li>Issue template <code>Docs.md</code> is set to add this label.</li></ul></li><li><code>Scope-Meta</code>: Related to the repository itself. <ul><li>This label is rarely used. Maintainers usually solve related problems directly, instead of opening an issue or PR.</li></ul></li><li><code>Scope-Website</code>: Related to the design of website. <ul><li>Issue template <code>Website.md</code> is set to add this label.</li></ul></li></ul>',42),l={render:function(e,t){return d}}}}]);