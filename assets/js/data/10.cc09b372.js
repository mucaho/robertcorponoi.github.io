(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{229:function(s){s.exports={data:{post:{title:"Node Module Of The Week ~ fs-extra",path:"/node-module-of-the-week-fs-extra",date:"2. July 2019",timeToRead:3,tags:[{id:"module",title:"module",path:"/tag/module"}],description:"fs-extra has everything that the native fs package should have and is a complete substitute for fs",content:'<h2 id="extra-that-sounds-like-bloat"><a href="#extra-that-sounds-like-bloat" aria-hidden="true"><span class="icon icon-link"></span></a>Extra? That Sounds Like Bloat</h2>\n<p>Yes I agree that some node modules are just bloat and there\'s already a native fs module so what could <a href="https://github.com/jprichardson/node-fs-extra" target="_blank" rel="nofollow noopener noreferrer">fs-extra</a> have that the native package does not? In thise case, fs-extra has everything that the native fs package should have. In fact, fs-extra can be used as a complete substitute for fs because it contains all of the same methods in addition to some more very useful ones. If that doesn\'t sell you, every method is a promise and so that means you don\'t have to create promises for the fs methods you use and promises are always better than callbacks.</p>\n<h2 id="i-already-use-fs-so-how-do-i-switch-to-fs-extra"><a href="#i-already-use-fs-so-how-do-i-switch-to-fs-extra" aria-hidden="true"><span class="icon icon-link"></span></a>I Already Use fs So How Do I Switch To fs-extra?</h2>\n<p>So let\'s say you have a project and you\'re already using fs as so:</p>\n<pre class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>All you have to do to transition (other than installing the module itself) is this:</p>\n<pre class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs-extra\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>It\'s that simple! Like I metioned earlier, fs-extra contains all of the methods of fs but it has the upgrade of returning promises so you can get rid of those dirty callbacks in your application.</p>\n<h2 id="well-how-do-i-use-the-promises"><a href="#well-how-do-i-use-the-promises" aria-hidden="true"><span class="icon icon-link"></span></a>Well How Do I Use The Promises?</h2>\n<p>If you\'re not well versed in promises, this can seem like more work than it\'s worth but trust me its easy. Let\'s take a look at a use case of fs, getting the names of all of the files in a directory:</p>\n<pre class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">\'/path/to/directory\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Logs all of the files in the directory, if it exists.</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span></pre>\n<p>If this is still very foreign to you then you probably need to go through some Promises/async tutorials to get a more in depth look at the subject. I recommended reading through a few of them but I have a simple article on the matter <a href="https://robertcorponoi.com/async-is-best-sync" target="_blank" rel="nofollow noopener noreferrer">here</a>.</p>\n<h2 id="ok-but-what-else-does-it-add"><a href="#ok-but-what-else-does-it-add" aria-hidden="true"><span class="icon icon-link"></span></a>Ok But What Else Does It Add?</h2>\n<p>fs-extra adds quite a few async and sync methods so I won\'t list them all here but I\'ll go over my favorite and most used method from it here, copy. To see what problem this solves, think about any times that you\'ve wanted to copy the files in a directory to another directory. With the regular fs package, this is an overly complicated task because you have to first read a directory and then go through every single file in that directory and call the <code class="language-text">copyFile</code> method.</p>\n<p>fa-extra makes this problem go away with a method named <code class="language-text">copy</code>. The copy method takes the original directory where the first are located and the target directory where the files should be copied too. It of course can take some options but that\'s outside the scope of this article.</p>\n<p>Let\'s say we want to do this with the native fs module and let\'s assume that you probably don\'t know the exact files that are in the directory to copy because files are being added by an external application which is usually the case:</p>\n<pre class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nfs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">\'/path/to/original\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> file <span class="token keyword">of</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    fs<span class="token punctuation">.</span><span class="token function">copyFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">\'/path/to/target\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span></pre>\n<p>and actually <code class="language-text">fs.copyFile</code> is one of the methods that fs supports using Promises with so you could do it like this:</p>\n<pre class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>promises<span class="token punctuation">;</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">copyFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">\'/path/to/original\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> file <span class="token keyword">of</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n      <span class="token keyword">const</span> filePath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">copyFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> <span class="token string">\'/path/to/target\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span></pre>\n<p>Copying files with the copy method from fs-extra is as simple as:</p>\n<pre class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs-extra\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">copyFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> fs<span class="token punctuation">.</span><span class="token function">copy</span><span class="token punctuation">(</span><span class="token string">\'/path/to/original\'</span><span class="token punctuation">,</span> <span class="token string">\'/path/to/destination\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span></pre>\n<p>It really is that simple, there\'s no need to use multiple functions to read a directory or call a function recusively and while fs introducted the async versions of many methods it still is not as complete or easy to use as fs-extra.</p>\n<h2 id="conclusion"><a href="#conclusion" aria-hidden="true"><span class="icon icon-link"></span></a>Conclusion</h2>\n<p>There\'s of course a lot more to the module but there is too much to go over for this post and so I high recommend you head over <a href="https://github.com/jprichardson/node-fs-extra" target="_blank" rel="nofollow noopener noreferrer">here to the GitHub repository</a> and read all about it. If you need some reassurance about the stability and maintenance of this package you can look at the lovely stats on GitHub which shows that this module is used by over 2.1 million repositories and is updated pretty frequently.</p>\n',coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/nmotw-fs-extra.07cc2b7.d040356.jpg",size:{width:860,height:573},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/nmotw-fs-extra.a67b0b2.d040356.jpg 480w","/assets/static/nmotw-fs-extra.07cc2b7.d040356.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 573' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-46'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-46)' width='860' height='573' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAABQYHCAQDAv/EADkQAAIBAwIEAgUKBgMAAAAAAAECAwQFEQAGBxIhMRNBIjJRcYEUFRYjJDM0YWJjNlKRkrGzwdLw/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgQBAwUABv/EACERAAIBBQACAwEAAAAAAAAAAAECAAMEERIhEzFBUWGR/9oADAMBAAIRAxEAPwDgpdv3gBT9J7Wc9vs8Z/40P4jWi8U2xLjNVXq3VVMAhaOKmjV2%2bsUdCFyOupcIlz92uM%2bzXLdlC0uQoGcdca2HsdVLZHPyZNOtlwMmFto0E8227xWRSReFC8SSxMQGcN25fPodW%2bxbe3BUWm3FdxWSBZoFdIpIYiyDlBwxK9wPbrPu1cGebKhsKp6j8zpkXHofVJ0OD6OsK4uNG1xDr1StQiVbeO2b9TWKolqNxWSWJHjDJEkQYkuuOw%2bOiibV3RI0jQ7mshxkkiKMdP7dQS7LmnA8NQSyjIX9Q01xKE5FEa%2b3t/726XqXeig4%2b5dRbZc9/sNR2m6/P9%2bpTcaNaxKaRpqolRHMMD0FGMZOcdPZr52BZblLba4Ut%2boaJUmUNHIVJJ5Ac9R8NCmc59Rcd%2b2vHaw5qi65UfeAZx%2bkape/Ips2vrEaoJuwXM9odiySKrLeAwYcw5aJv%2b%2buTd2xHt%2b2ai4vdfFaFVfwRTFMgsB1JY47%2bzTQnEuppKTw6W02WNB2AMxPXz9fS7vziDc7zt6ajkitsVPUcqOIY25sZB6FmPmNehNauRgtyLLRUEEARf2Lt2S42e63OKsEBpJIoihi5%2bfmJ88jGMaptu4XT1ggzf1TxIVmx8k7ZUNj1/z1NeHe7BZoa21S0dNUQ10kcjNMW9ErkDABGe/mdVmPiDdYHaKCmtyx06LEMwk4AXt63bAxpR6Ic5IkvSDPsRBO7eFclpt0lQ988bwni9H5Ly55nA/nPbTLb%2bE01W85%2bkxDxA5RLaWJ931mp1u/i1eaxaikliomj51BKR8uMMGxj4adLRxOvsSPVUr0LRTcp/DgcwIz3zoDajGCBDVVX0OQT9Dqg32729rwQaCF5OY0eC3KB0I5%2bnfXpsPY1VcYbjMl28EidVINKGBPhqc%2bsMd9FLbuuGs3LWVEtqhp57pDJA8oqHbDsuR0PTB5ce/S3UcU63bl4uVFt2nt5t7uj/aIi7FgiqTnI6dNCbVGBTUdhKxTsnCikcdI61gR2AY%2bfu1z3iGAUErQwVilWGDIjBQPiNa82y7y1TiRiQD0GcaH8dUUcJ9wkAZ8FP8AYmjF1k64lgT5mO6KKUl5o6eeURgAmNCwBJ8yO2qFTXCrazu4t1xeplBc4pnIyQAOuNFeCIztTcufOoph/nWmNqLi3QHLfh4hjmOPVHlqHuzTfTEPxBl2mHpLXcwfEqLbXqoYFmanYDJPu01bf%2bcaO2zUz2m65VwYvsrn0c9fLWqN%2bfwlX9T0aHz/AHk02MT8lnIZgXR8kMQe%2bNSLn8gaTHlXXrJb4gsdQKyOR1aBYm8WNRgh2GOgz20lSUlwqamaRKGrlPMOZo4WIB/pq%2bUZJ4g7uJZiRQyHJOfJNGNgTSChvKh2CmpiJ6/sprvPz1ONOf/Z' /%3e%3c/svg%3e"}}}}}}]);