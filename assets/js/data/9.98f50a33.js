(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{228:function(n){n.exports={data:{post:{title:"Node Module Of The Week ~ find up",path:"/node-module-of-the-week-find-up",date:"24. June 2019",timeToRead:3,tags:[{id:"module",title:"module",path:"/tag/module"}],description:"I don't know about you guys and gals but one of the most frustrating things for me when I work on my Node projects is figuring out the right path to the file I want.",content:'<h2 id="pathing"><a href="#pathing" aria-hidden="true"><span class="icon icon-link"></span></a>Pathing</h2>\n<p>I don\'t know about you guys and gals but one of the most frustrating things for me when I work on my Node projects is figuring out the right path to the file I want. I end up mixing a smörgåsbord of strings together and sticking it into <code class="language-text">path.resolve</code> only to end up in the file system of a Linux server in Alaska. It\'s also just such a trivial part of your application, unless of course you\'re making a file system package but you brought it on yourself, that you don\'t want to spend hours on it. Well have I (probably) got the solution for you, <a href="https://github.com/sindresorhus/find-up" target="_blank" rel="nofollow noopener noreferrer">find-up</a>.</p>\n<h2 id="find-what"><a href="#find-what" aria-hidden="true"><span class="icon icon-link"></span></a>Find What?</h2>\n<p>In order to avoid wasting your time, as the name implies it will find files <strong>UP</strong> from your current directory so if you need to find files <strong>DOWN</strong> then make like PhantomJS and disappear. Anyways, this package is very simple but it does its job and it does it well. It takes the name of a file to find and crawls the directory tree upwards until it finds it (or not).</p>\n<h2 id="use-case"><a href="#use-case" aria-hidden="true"><span class="icon icon-link"></span></a>Use Case</h2>\n<p>Now of course I wouldn\'t recommend a package that I don\'t use and believe in (unless you slip me $50 then I can look the other way) so I\'ll explain how I\'ve used it recently. So recently I\'ve been working on a project and it involves crawling websites and other fun Puppeteer stuff and while developing it I realized that I needed to support quite a bit of options and as much as I would love to create a giant options object or even better have a 50 argument function call, I decided I would take the route of having a JSON config file. This is similar to how Webpack and Rollup have config files and it can be useful to just load a single configuration file instead of just defining options. To avoid troubling the user with specifying a path to the configuration file or having me set strict rules on where it had to be defined since it could be a monorepo and the file could be used for multiple packages, I used the find-up package to look for it.</p>\n<p>This is how I was originally searching for the configuration file:</p>\n<pre class="language-js"><span class="token keyword">const</span> configPath <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\'/project.config.js\'</span><span class="token punctuation">;</span></pre>\n<p>This is inefficient mostly because of my last point, the package I was working on could be used in a monorepo and it could apply to multiple packages so just like Typescript I wanted to keep looking up until I found it. So the above ended up turning into:</p>\n<pre class="language-js"><span class="token keyword">const</span> findUp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'find-up\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> configPath <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findUp</span><span class="token punctuation">(</span><span class="token string">\'project.config.js\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Configuration file could not be found\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></pre>\n<h2 id="but-its-async"><a href="#but-its-async" aria-hidden="true"><span class="icon icon-link"></span></a>But It\'s Async!</h2>\n<p>Yes it is, isn\'t that wonderful! If you\'re afraid of async methods I suggest you dedicate a day to really learning asynchronous JavaScript because once it clicks you\'ll love it. If you really want to avoid async you can use <code class="language-text">findUp.sync(&#39;path/to/file&#39;)</code> but you should avoid using synchronous actions unless speed/timing is really not a factor in your application.</p>\n<h2 id="and-it-gets-better"><a href="#and-it-gets-better" aria-hidden="true"><span class="icon icon-link"></span></a>And It Gets Better!</h2>\n<p>As if the package isn\'t great enough on its own, it\'s published and maintained by <a href="https://github.com/sindresorhus" target="_blank" rel="nofollow noopener noreferrer">Sindre Sorhus</a> who dedicates his time to being a full time open source author which means he writes great code and also maintains it.</p>\n',coverImage:{type:"image",mimeType:"image/jpeg",src:"/assets/static/nmotw-find-up.07cc2b7.c73c113.jpg",size:{width:860,height:573},sizes:"(max-width: 860px) 100vw, 860px",srcset:["/assets/static/nmotw-find-up.a67b0b2.c73c113.jpg 480w","/assets/static/nmotw-find-up.07cc2b7.c73c113.jpg 860w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 860 573' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-40'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='10'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-40)' width='860' height='573' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAArAEADASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAABQYHBAIDCP/EADIQAAIBAgUBCAEDAwUAAAAAAAECAwQRAAUGEiExBxMUIkFRYYGhMnGxFSPwM2KRweH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHhEAAgMAAgMBAAAAAAAAAAAAAAECESEDEhMiQTH/2gAMAwEAAhEDEQA/AJDRQ7ibrcMf%2bMGsspJnnbw6ox8tywJ9AbcY8cpp2L7yLAbbj7GGfT8IWrVRGxSW6EA%2bvr/GJPRII05LDF4yaWqDIJg6iNTY33fXrfjHdbltO015Q4Swsdtzz0ww5TA04kkkjVgpJNvbd1xirW3Vgj7m8RCr1tcj0xP6aevroIhokY0iLtsqMB3i347zn8YcOz7s1GdZjV1daXhy1bqChszym36fhTyfoYD0lTEKqEGEB13K3%2b0brcfjFA0jqWRtSZfDWGCloqSlnjjRfJGp2qdxJPLE4MEr0ElmEv1TpysyPVIpKtN/dsu2ULYSqQbMv7/g4UM1ik8VK0l0UNtjO2/Itf8AnFO1HmVRUZbllJKYpYYZC8DuD3ioVby77/p5HHpbEzabvakmdiysG2g%2bhuPT24wtK7X4JNVjNGUqkdO1wHfcpUHn19cVXQejJtTZO1fTstMsS/2ty3WSUHp8D0%2bxiR5ZOkMqh2Xa%2b1iVPTnm1/8AOmL9obVhzCizePL4vA0FBlh8NTRybihXq5Nv1Enri2XosLEwQz0lXLFLvgdGbfGetwxJB%2b8G9G6Rm1OZ5DI0FJFc94VuGkKiy2%2bOp%2bMBM61G2fmkrHpVWrijKTTI4JlNvK5U2swsb%2b%2bHbs%2b1Q1bmq5fSxeDy%2bioZVEW65dwqsZGNhcnnCxSss5YT7N8tqsqrXpqqEwzx7lkAPUl%2bo%2bD1vg/pfSE2rq2oEkrR0ESMskw9XIG1R78i5%2bBgVqDUL5vl1FDXQK%2bYwxFRWs7B3QG4DL0P74duz7URfPMsyymhShy2mpp90Ql3mZ9obvHNhf49sCKjYHdCdqinqcmjp6WsVVrKeYJb0YWPIHsffCVLlKNSUlSjFX8zNyOfNwMNuc59V5pPkdNmkUUstPJY1bE97IhBsrehAv164VM/q6ajlhpYNoaWYKSG5HnB/wAGJt06iF6rkT5ZzGWIIAFiB94p/Zzkua6gizCTLo3MMMN5CJGTvGK/6QtwSRzY8cD4wo9qVFTUWvc4hpIVihEgYIvQFlBP5Jx9BdnZ/p2jsrhogsMZyjxZCqOZSeXJPU41eLs6fwy8cqZLcqlgW1PIQrMeUYWbgkcj6xjzSvWndjHJtswuVPJBUc/jBTtXiSm7SA8CLG0tNDO9h1dgdzfeJ1nkjL35BsWlIP1a2IONTou5%2bo2JmkTSJIrh/LIBu9ef/cYpc1jjapicWVoCrkmxFyvT6wnQzSAKwc32t/1jvOZpGZdzk/2x/OD1%2bE/K/wBGl8/L57SKkoeFdoAtwLA9Me2mtP1OtdVGGkcRxREyzVRXcsag%2bXgdWJ4A/f2wqZd5aiAgC9x6e45xbuzhzl2n9HiitD/U62q8YVAvNtjk23PxtHTDcXGnMDk5LT//2Q==' /%3e%3c/svg%3e"}}}}}}]);