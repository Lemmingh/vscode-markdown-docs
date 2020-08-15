(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{363:function(e,t,s){"use strict";s.r(t);var o=s(42),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("table",[s("thead",[s("tr",[s("th",[e._v("Label")]),e._v(" "),s("th",[e._v("Color")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Category-Decision")]),e._v(" "),s("td",[s("code",[e._v("#000000")])])]),e._v(" "),s("tr",[s("td",[e._v("Category-Management")]),e._v(" "),s("td",[s("code",[e._v("#a2eeef")])])]),e._v(" "),s("tr",[s("td",[e._v("Category-Spec")]),e._v(" "),s("td",[s("code",[e._v("#0075ca")])])]),e._v(" "),s("tr",[s("td",[e._v("Category-User")]),e._v(" "),s("td",[s("code",[e._v("#c5def5")])])]),e._v(" "),s("tr",[s("td",[e._v("dependencies")]),e._v(" "),s("td",[s("code",[e._v("#0366d6")])])]),e._v(" "),s("tr",[s("td",[e._v("help wanted")]),e._v(" "),s("td",[s("code",[e._v("#008672")])])]),e._v(" "),s("tr",[s("td",[e._v("Issue-Bug")]),e._v(" "),s("td",[s("code",[e._v("#d73a4a")])])]),e._v(" "),s("tr",[s("td",[e._v("Issue-Feature")]),e._v(" "),s("td",[s("code",[e._v("#7057ff")])])]),e._v(" "),s("tr",[s("td",[e._v("Issue-Question")]),e._v(" "),s("td",[s("code",[e._v("#F385FF")])])]),e._v(" "),s("tr",[s("td",[e._v("Needs-Attention")]),e._v(" "),s("td",[s("code",[e._v("#E6E600")])])]),e._v(" "),s("tr",[s("td",[e._v("Needs-Feedback")]),e._v(" "),s("td",[s("code",[e._v("#737300")])])]),e._v(" "),s("tr",[s("td",[e._v("Needs-Translation")]),e._v(" "),s("td",[s("code",[e._v("#006b75")])])]),e._v(" "),s("tr",[s("td",[e._v("Needs-Triage")]),e._v(" "),s("td",[s("code",[e._v("#0052cc")])])]),e._v(" "),s("tr",[s("td",[e._v("PR-AutoMerge")]),e._v(" "),s("td",[s("code",[e._v("#10ff10")])])]),e._v(" "),s("tr",[s("td",[e._v("Resolution-Answered")]),e._v(" "),s("td",[s("code",[e._v("#CCFFCC")])])]),e._v(" "),s("tr",[s("td",[e._v("Resolution-Duplicate")]),e._v(" "),s("td",[s("code",[e._v("#cfd3d7")])])]),e._v(" "),s("tr",[s("td",[e._v("Resolution-FixCommitted")]),e._v(" "),s("td",[s("code",[e._v("#84ffb3")])])]),e._v(" "),s("tr",[s("td",[e._v("Resolution-Invalid")]),e._v(" "),s("td",[s("code",[e._v("#cfd3d7")])])]),e._v(" "),s("tr",[s("td",[e._v("Resolution-Released")]),e._v(" "),s("td",[s("code",[e._v("#007300")])])]),e._v(" "),s("tr",[s("td",[e._v("Resolution-Wontfix")]),e._v(" "),s("td",[s("code",[e._v("#ffffff")])])]),e._v(" "),s("tr",[s("td",[e._v("Scope-Docs")]),e._v(" "),s("td",[s("code",[e._v("#000080")])])]),e._v(" "),s("tr",[s("td",[e._v("Scope-Meta")]),e._v(" "),s("td",[s("code",[e._v("#000080")])])]),e._v(" "),s("tr",[s("td",[e._v("Scope-Website")]),e._v(" "),s("td",[s("code",[e._v("#000080")])])])])]),e._v(" "),s("h2",{attrs:{id:"short-circuit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#short-circuit"}},[e._v("#")]),e._v(" Short circuit")]),e._v(" "),s("p",[e._v("If an issue or PR gets any of:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Resolution-Duplicate")])]),e._v(" "),s("li",[s("code",[e._v("Resolution-Invalid")])]),e._v(" "),s("li",[s("code",[e._v("Resolution-Wontfix")])])]),e._v(" "),s("p",[e._v("then:")]),e._v(" "),s("ul",[s("li",[e._v("The processing of it is terminated immediately. It will be closed.")]),e._v(" "),s("li",[e._v("It does not need other labels.")]),e._v(" "),s("li",[e._v("Core maintainers will ignore it and not respond to it in future.")])]),e._v(" "),s("h2",{attrs:{id:"enforcement-of-label-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enforcement-of-label-system"}},[e._v("#")]),e._v(" Enforcement of label system")]),e._v(" "),s("p",[e._v("When a thread is not short circuited, it must meet label requirements. Otherwise, it is tagged improperly and needs a tag fix.")]),e._v(" "),s("ul",[s("li",[e._v("An issue or PR must have one and only one "),s("code",[e._v("Scope-*")]),e._v(" label. This also implies that a thread must focus on only one scope.")]),e._v(" "),s("li",[e._v("If a thread has "),s("code",[e._v("Scope-Docs")]),e._v(", it must have proper "),s("code",[e._v("Category-*")]),e._v(" labels.")]),e._v(" "),s("li",[e._v("An issue must have one and only one "),s("code",[e._v("Issue-*")]),e._v(" label.")]),e._v(" "),s("li",[e._v("An issue must have one and only one "),s("code",[e._v("Resolution-*")]),e._v(" label, when it is closed.")])]),e._v(" "),s("h2",{attrs:{id:"area"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#area"}},[e._v("#")]),e._v(" "),s("code",[e._v("Area-*")])]),e._v(" "),s("p",[e._v("Reserved for future use.")]),e._v(" "),s("h2",{attrs:{id:"category"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#category"}},[e._v("#")]),e._v(" "),s("code",[e._v("Category-*")])]),e._v(" "),s("p",[e._v("Indicates which part of the documentation the issue or PR belongs to.")]),e._v(" "),s("p",[e._v("Only applies to threads with "),s("code",[e._v("Scope-Docs")]),e._v(" label.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Category-Decision")]),e._v(": Decisions on what should or should not be implemented, or general guidelines.")]),e._v(" "),s("li",[s("code",[e._v("Category-Management")]),e._v(": Conventions and maintainers' behavior.")]),e._v(" "),s("li",[s("code",[e._v("Category-Spec")]),e._v(": Specifications of features.")]),e._v(" "),s("li",[s("code",[e._v("Category-User")]),e._v(": User guide.")])]),e._v(" "),s("h2",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" "),s("code",[e._v("dependencies")])]),e._v(" "),s("p",[e._v("This label is automatically created by GitHub. We don't use it.")]),e._v(" "),s("h2",{attrs:{id:"help-wanted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#help-wanted"}},[e._v("#")]),e._v(" "),s("code",[e._v("help wanted")])]),e._v(" "),s("p",[e._v("Extra attention is needed. Looking for help.")]),e._v(" "),s("p",[e._v("This is a special label recognized by GitHub. Do not change its name.")]),e._v(" "),s("h2",{attrs:{id:"issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issue"}},[e._v("#")]),e._v(" "),s("code",[e._v("Issue-*")])]),e._v(" "),s("p",[e._v("Indicates the type of an issue.")]),e._v(" "),s("p",[e._v("Only applies to issues.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Issue-Bug")]),e._v(": Something isn't working.")]),e._v(" "),s("li",[s("code",[e._v("Issue-Feature")]),e._v(": New feature requests, or enhancement of existing features.")]),e._v(" "),s("li",[s("code",[e._v("Issue-Question")]),e._v(": Questions or discussions. Further information is requested.")])]),e._v(" "),s("h2",{attrs:{id:"needs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#needs"}},[e._v("#")]),e._v(" "),s("code",[e._v("Needs-*")])]),e._v(" "),s("p",[e._v("Indicates that the thread needs a specific type of response.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Needs-Attention")]),e._v(": Highest priority. Look at this as soon as possible.")]),e._v(" "),s("li",[s("code",[e._v("Needs-Feedback")]),e._v(": The original author of the issue or PR needs to come back and respond to something.\n"),s("ul",[s("li",[e._v("The Stale bot adds this label when the thread has not had recent activity (go stale).")]),e._v(" "),s("li",[e._v("Maintainers may add this label to show that we are waiting for the original author.")])])]),e._v(" "),s("li",[s("code",[e._v("Needs-Translation")]),e._v(": Please translate to English.")]),e._v(" "),s("li",[s("code",[e._v("Needs-Triage")]),e._v(": It's a new issue.\n"),s("ul",[s("li",[e._v("GitHub issue templates are set to add this label.")])])])]),e._v(" "),s("h2",{attrs:{id:"pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[e._v("#")]),e._v(" "),s("code",[e._v("PR-*")])]),e._v(" "),s("p",[e._v("Reserved for future use.")]),e._v(" "),s("h2",{attrs:{id:"resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resolution"}},[e._v("#")]),e._v(" "),s("code",[e._v("Resolution-*")])]),e._v(" "),s("p",[e._v("Indicates the final state of an issue or PR.")]),e._v(" "),s("p",[s("code",[e._v("Resolution-Duplicate")]),e._v(" and "),s("code",[e._v("Resolution-Invalid")]),e._v(" apply to both issues and PRs. Others only apply to issues.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Resolution-Answered")]),e._v(": Discussion closed.\n"),s("ul",[s("li",[e._v("Add this label when an issue with "),s("code",[e._v("Issue-Question")]),e._v(" label is closed.")])])]),e._v(" "),s("li",[s("code",[e._v("Resolution-Duplicate")]),e._v(": This issue or pull request already exists.")]),e._v(" "),s("li",[s("code",[e._v("Resolution-FixCommitted")]),e._v(": Fix is checked in, but it might be a few weeks until a release.\n"),s("ul",[s("li",[e._v("Add this label when an issue is fixed but not released.")]),e._v(" "),s("li",[e._v("Remove this label when the fix is published to the documentation website.")])])]),e._v(" "),s("li",[s("code",[e._v("Resolution-Invalid")]),e._v(": This does not seem right, or contain any valid or useful information. It's discarded.")]),e._v(" "),s("li",[s("code",[e._v("Resolution-Released")]),e._v(": It's generally available.\n"),s("ul",[s("li",[e._v("Add this label when the fix is published to the documentation website.")])])]),e._v(" "),s("li",[s("code",[e._v("Resolution-Wontfix")]),e._v(": This will not be worked on. Because it's by design, or outside of our control.")])]),e._v(" "),s("h2",{attrs:{id:"scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" "),s("code",[e._v("Scope-*")])]),e._v(" "),s("p",[e._v("Indicates which general part of the project the issue or PR belongs to.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Scope-Docs")]),e._v(": Related to the content of documentation.\n"),s("ul",[s("li",[e._v("Issue template "),s("code",[e._v("Docs.md")]),e._v(" is set to add this label.")])])]),e._v(" "),s("li",[s("code",[e._v("Scope-Meta")]),e._v(": Related to the repository itself.\n"),s("ul",[s("li",[e._v("This label is rarely used. Maintainers usually solve related problems directly, instead of opening an issue or PR.")])])]),e._v(" "),s("li",[s("code",[e._v("Scope-Website")]),e._v(": Related to the design of website.\n"),s("ul",[s("li",[e._v("Issue template "),s("code",[e._v("Website.md")]),e._v(" is set to add this label.")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);