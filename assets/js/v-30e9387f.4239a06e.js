(self.webpackChunkmarkdown_all_in_one_docs=self.webpackChunkmarkdown_all_in_one_docs||[]).push([[6833],{1115:(e,t,o)=>{"use strict";o.r(t),o.d(t,{data:()=>n});const n={key:"v-30e9387f",path:"/contributing/emoji.html",title:"Emoji",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Introduction",slug:"introduction",children:[]},{level:2,title:"Approved emojis",slug:"approved-emojis",children:[{level:3,title:"Content",slug:"content",children:[]},{level:3,title:"Meta",slug:"meta",children:[]}]},{level:2,title:"Other emojis",slug:"other-emojis",children:[]},{level:2,title:"Precedence",slug:"precedence",children:[]},{level:2,title:"Comparison with Conventional Commits types",slug:"comparison-with-conventional-commits-types",children:[]},{level:2,title:"Design explanation",slug:"design-explanation",children:[{level:3,title:"Why not Conventional Commits",slug:"why-not-conventional-commits",children:[]},{level:3,title:"Why not gitmoji",slug:"why-not-gitmoji",children:[]},{level:3,title:"Why single code point",slug:"why-single-code-point",children:[]},{level:3,title:"Why no &quot;merge&quot;",slug:"why-no-merge",children:[]},{level:3,title:"Why no &quot;release&quot;",slug:"why-no-release",children:[]},{level:3,title:"Why no &quot;revert&quot;",slug:"why-no-revert",children:[]},{level:3,title:"Why no &quot;internationalization and localization&quot;",slug:"why-no-internationalization-and-localization",children:[]}]},{level:2,title:"References",slug:"references",children:[]}],filePathRelative:"contributing/emoji.md"}},347:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>ie});var n=o(6252);const i=(0,n.Wm)("h1",{id:"emoji"},[(0,n.Wm)("a",{class:"header-anchor",href:"#emoji"},"#"),(0,n.Uk)(" Emoji")],-1),a=(0,n.Wm)("h2",{id:"introduction"},[(0,n.Wm)("a",{class:"header-anchor",href:"#introduction"},"#"),(0,n.Uk)(" Introduction")],-1),r=(0,n.Wm)("p",null,"This is the specification of the usage of emojis in commit messages.",-1),s=(0,n.Uk)("It is intentionally generic, so that can be ported to other projects easily. Theoretically, although strongly discouraged, you can even try to combine this system with "),l={href:"https://www.conventionalcommits.org/",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("Conventional Commits"),c=(0,n.Uk)("."),h=(0,n.uE)('<p>Your project may add new emojis for special needs, but may not change the description of the existing ones. Be careful! You are responsible for making your extension free of ambiguity and error.</p><h2 id="approved-emojis"><a class="header-anchor" href="#approved-emojis">#</a> Approved emojis</h2><p>This section lists all the emojis allowed in commit messages of the mainline (typically the <code>master</code> or <code>main</code> branch). Each table consists of the Unicode code, character, and meaning of each emoji. Each emoji represents a general category of actions.</p><p>This specification requires to use single code point. This page is carefully generated. You can copy these emojis with confidence.</p><h3 id="content"><a class="header-anchor" href="#content">#</a> Content</h3><table><thead><tr><th>Code</th><th>Emoji</th><th>Meaning</th></tr></thead><tbody><tr><td>U+1F41B</td><td>🐛</td><td>Fixing</td></tr><tr><td>U+2728</td><td>✨</td><td>Feature</td></tr><tr><td>U+1F3D7</td><td>🏗</td><td>Refactoring</td></tr><tr><td>U+1F525</td><td>🔥</td><td>Removal</td></tr></tbody></table><p>The content is the most significant part of a repository.</p><p>Typically, for a repository that hosts a product, the content is the source of the product. For a repository that hosts documentation, the content is the source of the documentation. The concrete definition depends on your project.</p><ul><li>Fixing: Fix a bug, which is typically an error or unexpected behavior.</li><li>Feature: Introduce a new feature, or enhance existing features. For a documentation repository, a feature usually refers to an article.</li><li>Refactoring: A content change that neither fixes a bug nor adds a feature. For instance, reorganization, improving structure, internal renaming, and formatting.</li><li>Removal: Remove dead code or resources.</li></ul><h3 id="meta"><a class="header-anchor" href="#meta">#</a> Meta</h3><table><thead><tr><th>Code</th><th>Emoji</th><th>Meaning</th></tr></thead><tbody><tr><td>U+1F477</td><td>👷</td><td>Infrastructure</td></tr><tr><td>U+2705</td><td>✅</td><td>Test case</td></tr><tr><td>U+2B06</td><td>⬆</td><td>Update dependencies</td></tr><tr><td>U+1F527</td><td>🔧</td><td>Configuration</td></tr><tr><td>U+1F4DD</td><td>📝</td><td>Documentation</td></tr></tbody></table><p>Other parts of a repository are meta (the content about the repository itself).</p><p>The concrete definition depends on your project.</p><ul><li>Infrastructure: Change build system, test system, and CI/CD configuration files.</li><li>Test case: Change test cases only.</li><li>Update dependencies: Update dependencies only.</li><li>Configuration: Change miscellaneous configuration files, such as gitignore, editorconfig, and housekeeping bot configuration.</li><li>Documentation: Change documentation only. The documentation here usually consists of repository README, license, contributing guide, code of conduct, and issue templates.</li></ul><h2 id="other-emojis"><a class="header-anchor" href="#other-emojis">#</a> Other emojis</h2>',15),m=(0,n.Uk)("Emojis except the approved are not allowed in commit messages of the mainline, but are useful in communications. This section is a recommendation about their usage. It can be regarded as a complement to "),u={href:"https://gitmoji.carloscuesta.me/",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("gitmoji"),g=(0,n.Uk)("."),f=(0,n.uE)('<table><thead><tr><th>Code</th><th>Emoji</th><th>Meaning</th></tr></thead><tbody><tr><td>U+26A1</td><td>⚡</td><td>Performance</td></tr><tr><td>U+1F3A8</td><td>🎨</td><td>Formatting</td></tr><tr><td>U+1F4A5</td><td>💥</td><td>Breaking change</td></tr><tr><td>U+1F9EA</td><td>🧪</td><td>Experiment</td></tr></tbody></table><h2 id="precedence"><a class="header-anchor" href="#precedence">#</a> Precedence</h2><p>From our experience, it&#39;s very common that a change involves many different types of operations. Dividing it into multiple commits would usually take an inappropriate amount of effort, and result in confusing and broken history. This section helps you choose an emoji in those scenarios.</p><p>We assign significance to each emoji to construct the following list. Therefore, test your change with each item in turn, and the first exact match will be the best.</p><p>The &quot;exact match&quot; ensures that a change won&#39;t be captured by its superset accidentally. For example, a test system change that affects test cases matches &quot;Infrastructure&quot;, while a test case only change matches &quot;Test case&quot;.</p><ol><li>🐛</li><li>✨</li><li>🏗</li><li>🔥</li><li>👷</li><li>✅</li><li>⬆</li><li>🔧</li><li>📝</li></ol><h2 id="comparison-with-conventional-commits-types"><a class="header-anchor" href="#comparison-with-conventional-commits-types">#</a> Comparison with Conventional Commits types</h2><p>People who are accustomed to Conventional Commits may find this section helpful.</p><table><thead><tr><th>Emoji</th><th>Types</th></tr></thead><tbody><tr><td>🐛</td><td>fix</td></tr><tr><td>✨</td><td>feat</td></tr><tr><td>🏗</td><td>refactor</td></tr><tr><td>👷</td><td>build, ci</td></tr><tr><td>✅</td><td>test</td></tr><tr><td>⬆</td><td>build</td></tr><tr><td>🔧</td><td>chore</td></tr><tr><td>📝</td><td>docs</td></tr></tbody></table><p>The table covers almost all popular types, including those which has been discarded by Angular but still common in other projects. But the following are intentionally excluded: perf, style.</p><p>Other parts of Conventional Commits are irrelevant to this specification.</p><h2 id="design-explanation"><a class="header-anchor" href="#design-explanation">#</a> Design explanation</h2><h3 id="why-not-conventional-commits"><a class="header-anchor" href="#why-not-conventional-commits">#</a> Why not Conventional Commits</h3>',13),y=(0,n.Uk)("We understand that many people love Conventional Commits and the "),b={href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("Angular conventions"),w=(0,n.Uk)(". However, symbols and pictographs can improve readability, and when used properly, won't be bad for machine parsing."),W=(0,n.Wm)("h3",{id:"why-not-gitmoji"},[(0,n.Wm)("a",{class:"header-anchor",href:"#why-not-gitmoji"},"#"),(0,n.Uk)(" Why not gitmoji")],-1),k=(0,n.Uk)("We tried gitmoji. It is not handy. And the "),j={href:"https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages",target:"_blank",rel:"noopener noreferrer"},U=(0,n.Uk)("Atom conventions"),C=(0,n.Uk)(" are even more strange."),q=(0,n.uE)('<p>Lots of ambiguity and overlap is in gitmoji. Besides, some emojis are of multiple code points. Additionally, some appear to be designed for a very specific field.</p><p>In short, gitmoji can serve as a communication guide, but is not good for commit messages.</p><p>To reduce such friction, this specification selects a set of emojis with distinct meaning, and emojis only represent basic actions.</p><h3 id="why-single-code-point"><a class="header-anchor" href="#why-single-code-point">#</a> Why single code point</h3><p>To make things direct, simple, and easy.</p><p>We understand that many guides and IMEs recommend to append a Variation Selector-16 (U+FE0F) to certain characters to ensure emoji presentation. Besides, there are things like ZWJ sequences. However, they all focus on rendering. They could not benefit commit authors, but increase complexity of tooling.</p><p>We also give up emoji code for a similar reason. Additionally, in pull request title, emoji code can be of poor readability.</p><p>With single code point solution, contributors and tooling authors can work with emojis harmoniously, without comprehensive knowledge of Unicode.</p><h3 id="why-no-merge"><a class="header-anchor" href="#why-no-merge">#</a> Why no &quot;merge&quot;</h3><p>We are seeing more and more projects enforcing linear history.</p><p>For squash merge and rebase merge, there is no merge commit at all.</p><p>For three-way merge, you can try 🔀 (U+1F500, Twisted Rightwards Arrows).</p><h3 id="why-no-release"><a class="header-anchor" href="#why-no-release">#</a> Why no &quot;release&quot;</h3><p>Preferences vary so greatly that we cannot figure out a popular emoji for &quot;release&quot;. We leave the choice to project maintainers.</p><h3 id="why-no-revert"><a class="header-anchor" href="#why-no-revert">#</a> Why no &quot;revert&quot;</h3><p>&quot;Revert&quot; is a complex case, but in practice, merely caused by two reasons:</p><ol><li>A commit was pushed by mistake.</li><li>Some severe degradation was observed.</li></ol><p>If it was a mistake, we strongly recommend that you suspend development and contact your administrator to drop the commit. It should only take a few minutes, but will leave a cleaner and less confusing history and Git blame.</p><p>If it was some degradation, we recommend that you make a &quot;Fixing&quot; (🐛) with explanation like this:</p><div class="language-git ext-git line-numbers-mode"><pre class="language-git"><code>🐛 Revert <span class="token string">&quot;&lt;summary-of-the-reverted-commit&gt;&quot;</span>\n\nThis reverts commit &lt;hash&gt;.\n\nIt damaged user data that is not in the default location.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Note that the above example only reverts single commit. In very rare cases, you need to revert multiple commits at once. Remember to summarize the commits concisely.</p><h3 id="why-no-internationalization-and-localization"><a class="header-anchor" href="#why-no-internationalization-and-localization">#</a> Why no &quot;internationalization and localization&quot;</h3>',22),T={href:"https://en.wikipedia.org/wiki/Internationalization_and_localization",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("Internationalization and localization"),F=(0,n.Uk)(" is more of a scope, which is described in Conventional Commits, than an action. Besides, whether and how to do it depends on your project."),I=(0,n.Wm)("p",null,'This also applies to "accessibility", "assets", "comments", "literals", "user experience", etc.',-1),_=(0,n.Wm)("h2",{id:"references"},[(0,n.Wm)("a",{class:"header-anchor",href:"#references"},"#"),(0,n.Uk)(" References")],-1),E={href:"https://unicode.org/emoji/techindex.html",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("Unicode Emoji"),R={href:"https://emojipedia.org/",target:"_blank",rel:"noopener noreferrer"},z=(0,n.Uk)("Emojipedia"),B={href:"https://gitmoji.carloscuesta.me/",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("gitmoji"),D=(0,n.Uk)(" ("),M={href:"https://github.com/carloscuesta/gitmoji",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("GitHub"),G=(0,n.Uk)(")"),P={href:"http://emoji-cheat-sheet.com/",target:"_blank",rel:"noopener noreferrer"},H=(0,n.Uk)("Emoji cheat sheet"),Y={href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("Conventional Commits 1.0.0"),V=(0,n.Uk)(" ("),L={href:"https://github.com/conventional-commits/conventionalcommits.org",target:"_blank",rel:"noopener noreferrer"},J=(0,n.Uk)("GitHub"),Z=(0,n.Uk)(")"),K={href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("Angular Contributing Guidelines"),X={href:"https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md",target:"_blank",rel:"noopener noreferrer"},$=(0,n.Uk)("Vue Commit Message Convention"),ee={href:"https://refactoring.com/catalog/",target:"_blank",rel:"noopener noreferrer"},te=(0,n.Uk)("Catalog of Refactorings"),oe={href:"https://github.com/tonsky/FiraCode",target:"_blank",rel:"noopener noreferrer"},ne=(0,n.Uk)("Fira Code"),ie={render:function(e,t){const o=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[i,a,r,(0,n.Wm)("p",null,[s,(0,n.Wm)("a",l,[d,(0,n.Wm)(o)]),c]),h,(0,n.Wm)("p",null,[m,(0,n.Wm)("a",u,[p,(0,n.Wm)(o)]),g]),f,(0,n.Wm)("p",null,[y,(0,n.Wm)("a",b,[v,(0,n.Wm)(o)]),w]),W,(0,n.Wm)("p",null,[k,(0,n.Wm)("a",j,[U,(0,n.Wm)(o)]),C]),q,(0,n.Wm)("p",null,[(0,n.Wm)("a",T,[x,(0,n.Wm)(o)]),F]),I,_,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("a",E,[A,(0,n.Wm)(o)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",R,[z,(0,n.Wm)(o)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",B,[O,(0,n.Wm)(o)]),D,(0,n.Wm)("a",M,[N,(0,n.Wm)(o)]),G]),(0,n.Wm)("li",null,[(0,n.Wm)("a",P,[H,(0,n.Wm)(o)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",Y,[S,(0,n.Wm)(o)]),V,(0,n.Wm)("a",L,[J,(0,n.Wm)(o)]),Z]),(0,n.Wm)("li",null,[(0,n.Wm)("a",K,[Q,(0,n.Wm)(o)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",X,[$,(0,n.Wm)(o)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",ee,[te,(0,n.Wm)(o)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",oe,[ne,(0,n.Wm)(o)])])])],64)}}}}]);