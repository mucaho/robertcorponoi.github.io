(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{225:function(n){n.exports={data:{tag:{title:"es6",belongsTo:{edges:[{node:{title:"Writing Cleaner JavaScript Using Modules",path:"/writing-cleaner-java-script-using-modules",date:"23. June 2019",timeToRead:3,description:"Let me start this off by saying that if you haven't been using modules in your lastest scripts, then prepare to spend a lot of time refactoring after reading this.",coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/writing-cleaner-javascript-using-modules.07cc2b7.6d44117.jpg",size:{width:860,height:561},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/writing-cleaner-javascript-using-modules.a67b0b2.6d44117.jpg 480w","/assets/static/writing-cleaner-javascript-using-modules.07cc2b7.6d44117.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 561' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-11'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-11)' width='860' height='561' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAqAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQBAgUAB//EADAQAAIBAwMDAgUDBAMAAAAAAAECAwQRIQASMRNBUWGBBRQicaEjQpEVMjPwYrHR/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//EACQRAQACAQMDBAMAAAAAAAAAAAEAAhEDEiETQYEiUWGRseHw/9oADAMBAAIRAxEAPwDxengqZIGmUkDkKWQMfbkfjQUqpF2sZH3CxuClr%2bdOz1kX1PTySszMCyzUyEWAt5I49NG68tFMk5Vd12QKaaPbwLkgYPbV4fdkekeaH1%2bpkwLJLKY1azE3Xc6i/vo1XDNTsnVZbktcKyG1reMa1IaulldemjtVTON8YooiuBiwv6DGNTWVs0ci71RYpASFWkjUgjHbA5wL4zqOnVZt1rnEyoIJpugYzdZSQp3JjnkduOTpiGmraaUSoyCaHja6EgnwPNu59tGM01QiCjhH1koVECAYG7Pb3P8A5oEvw74hIgZqPDtg9NATYcLnQaZB1LvDF5K2V1tIwI3mQEKgNzyT6nXIs/Rie7We5UhkzY2sfB1almNP1gQFY7RZoVcYJvg4vrRopKFZ1lhM7ygC/Uo4iAO4H1W1WMSLh2qfUTmoKyaRG/p7R7lwEpbAgd7DUQUIi6b1Sum43UfLlxjte/IIyNEMQdwpqVhUKSoWOUlh5sPUgfa2lYUYOgckkuAy7XIGe/nTD5g249o5U00MiKUaXqBbKooyL583/Oko4njZwafqDbt2GIkLfg4PODpxGOFNFC5GcxybiPb21XbI%2b9UgCklrM0bkbgeM4Avj00ZI9tg7f3mRTwMAN8Lbnuqj5f8AuNv%2b9VejrSoT5OUE5t8ud2AfxzpyaF2VTDAn1XBjSKUFcc5Hk/i%2bq9dYnEb0kLzKm0K5lBGOTnvznRyyfTV5PzEY6SEqnVJRwT1f0SSp8DNvf10d/hsRVRBJI8rruVFpGBP2N/XUyNTmW46Iuou4SQjv2857YwNEhgWoIQyJGm2wcRyc35FhcHH8aTxGLE4N5UstSoscfqODf20MkpZo5lZm5Ku5GLc/721CTygSESvcIf3H00aqlkR41WR1HT4BI7nVbB4Jn1UBefBIErbwhmKC99wkewNuSf8AedFlEiWZKsOhBH%2bVxkdvW/8AAtpSGaUGS0j5t%2b46rNNKRCTI5IDgXY%2bmotTZXOZrp6zqam3ARuKoqhL1Iqsh7GxSZwfvfTAp5aoxvUV8TSyDbmaRmJ4scY7jvnWesjirUB2sC9s/8das9ZUwS7YamaNdgNkcgXO0njyc/fUVSxmbXq0ttXPgiNTCYJArTrK/Fo3k%2bk%2b49tCWWVXdTM20WNhK1v51un4jWtLKWrKkloFJJlbOPvoT1E60LIs0gQoLqGNu/bQnzEIdj6n/2Q==' /%3e%3c/svg%3e"},content:'<p>Let me start this off by saying that if you haven\'t been using modules in your lastest scripts, then prepare to spend a lot of time refactoring after reading this.</p>\n<h2 id="exporting-huh-what-is-it-good-for"><a href="#exporting-huh-what-is-it-good-for" aria-hidden="true"><span class="icon icon-link"></span></a>Exporting, HUH, What Is It Good For?</h2>\n<p>If you\'ve been writing JavaScript before ES6 or you write JavaScript to support older browsers without Babel (truly madness) then you know how much of a pain in the butt it can be to keep track of and debug your code because its either one giant file or files split up into parts that make no sense. Modules let you write your JavaScript however you want and export/import pieces of files or entire files exactly where they need to be. This makes the readability and ease of maintenance of your code skyrocket.</p>\n<h2 id="lets-get-to-the-good-stuff"><a href="#lets-get-to-the-good-stuff" aria-hidden="true"><span class="icon icon-link"></span></a>Let\'s Get To The Good Stuff</h2>\n<p>To best demonstrate modules, let\'s go through some examples. So this first part will be showing how you would normally define two classes, in one file.</p>\n<p><strong>Shapes.js</strong></p>\n<pre class="language-js"><span class="token keyword">class</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cylinders</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cylinders <span class="token operator">=</span> cylinders<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cylinders<span class="token punctuation">,</span> cost</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span>cylinders<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cost <span class="token operator">=</span> cost<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></pre>\n<p>Traditionally, you would have to declare all stuff that relies on each other in the same file. This is gross right? I mean classes should get their own file like almost any other language, it just makes sense.</p>\n<p>Now if we convert this to modules you can see the beauty of it:</p>\n<p><strong>Engine.js</strong></p>\n<pre class="language-js"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cylinders</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cylinders <span class="token operator">=</span> cylinders<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></pre>\n<p><strong>Car.js</strong></p>\n<pre class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> Engine <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'/path/to/Engine.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cylinders<span class="token punctuation">,</span> cost</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span>cylinders<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cost <span class="token operator">=</span> cost<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>Just take a second to appreciate that; each class is in its own file and nicely separated. Whenever we need to use Engine, like in the Car class, we can just import it and use it like before. The two big changes are the keywords export and import. The export keyword just signifies that this piece of code will be used by another module. The import statement declares what exported code you want to import into your current file. Notice that its in brackets, this means that you can export multiple objects from a file and import just the ones you need later. This is useful say if you have a utilities file that exports a bunch of utility functions and you can pick and choose which ones you need to import.</p>\n<p>If you\'re just going to have one object that you export, like we do above with Engine, you can use a default export like so:</p>\n<p><strong>Engine.js</strong></p>\n<pre class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Engine</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cylinders</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cylinders <span class="token operator">=</span> cylinders<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></pre>\n<p><strong>Car.js</strong></p>\n<pre class="language-js"><span class="token keyword">import</span> Engine <span class="token keyword">from</span> <span class="token string">\'/path/to/Engine.js\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">cylinders<span class="token punctuation">,</span> cost</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span>cylinders<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>cost <span class="token operator">=</span> cost<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>\n<p>The difference between this and the last method are that we use <code class="language-text">export default</code> instead of just <code class="language-text">export</code> and when we import we don\'t need curly braces because we\'re only importing one thing. With this method you can actually call the import anything you would like. For example instead of using <code class="language-text">import Engine from &#39;/path/to/Engine.js&#39;;</code> you can use <code class="language-text">import Watchamacallit from &#39;path/to/Engine.js&#39;;</code>. You can name it whatever you like when using default exports but for readability its recommended you name it the same as what it is when its exported unless there can be conflicts.</p>\n<h2 id="now-what"><a href="#now-what" aria-hidden="true"><span class="icon icon-link"></span></a>Now What?</h2>\n<p>Well chances are that you actually want to use the JavaScript you write at some point so it will need to be included into an HTML document via a script tag. This works largely the same as any normal script tag except you have to specify <code class="language-text">type=&quot;module&quot;</code> like so:</p>\n<pre class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>path/to/Car.js<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></pre>\n<p>You can also export the Car object, create a script tag, and import Car and work with it in the HTML document:</p>\n<pre class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Car <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'./path/to/Car.js\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> Car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></pre>\n<h2 id="alright-whats-the-bad-news"><a href="#alright-whats-the-bad-news" aria-hidden="true"><span class="icon icon-link"></span></a>Alright, What\'s the Bad News?</h2>\n<p>Well, there\'s not really any bad news unless you need to support IE 11 and below. However, this doesn\'t matter if you\'re using Babel (seriously use it if you\'re not) because Babel will transpile your modules to one large file recognizable by the ugly duckling that is IE.</p>\n<p>That\'s all on modules, if you haven\'t been using them I recommend you try it out with a recent project and with the safety of git.</p>\n'}}]}}}}}}]);