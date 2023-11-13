import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.ec8f7e8e.js";const E=JSON.parse('{"title":"How to build KernelSU?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/how-to-build.md","filePath":"guide/how-to-build.md"}'),n={name:"guide/how-to-build.md"},o=l(`<h1 id="how-to-build-kernelsu" tabindex="-1">How to build KernelSU? <a class="header-anchor" href="#how-to-build-kernelsu" aria-label="Permalink to &quot;How to build KernelSU?&quot;">​</a></h1><p>First, you should read the Android Official docs for kernel build:</p><ol><li><a href="https://source.android.com/docs/setup/build/building-kernels" target="_blank" rel="noreferrer">Building Kernels</a></li><li><a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">GKI Release Builds</a></li></ol><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This page is for GKI devices, if you use an old kernel, please refer <a href="./how-to-integrate-for-non-gki.html">how to integrate KernelSU for old kernel</a></p></div><h2 id="build-kernel" tabindex="-1">Build Kernel <a class="header-anchor" href="#build-kernel" aria-label="Permalink to &quot;Build Kernel&quot;">​</a></h2><h3 id="sync-the-kernel-source-code" tabindex="-1">Sync the kernel source code <a class="header-anchor" href="#sync-the-kernel-source-code" aria-label="Permalink to &quot;Sync the kernel source code&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://android.googlesource.com/kernel/manifest</span></span>
<span class="line"><span style="color:#B392F0;">mv</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">kernel_manifest.xm</span><span style="color:#E1E4E8;">l</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.repo/manifests</span></span>
<span class="line"><span style="color:#B392F0;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">manifest.xml</span></span>
<span class="line"><span style="color:#B392F0;">repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">sync</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://android.googlesource.com/kernel/manifest</span></span>
<span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">kernel_manifest.xm</span><span style="color:#24292E;">l</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.repo/manifests</span></span>
<span class="line"><span style="color:#6F42C1;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">manifest.xml</span></span>
<span class="line"><span style="color:#6F42C1;">repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">sync</span></span></code></pre></div><p>The <code>&lt;kernel_manifest.xml&gt;</code> is a manifest file which can determine a build uniquely, you can use the manifest to do a re-preducable build. You should download the manifest file from <a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">Google GKI release builds</a></p><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h3><p>Please check the <a href="https://source.android.com/docs/setup/build/building-kernels" target="_blank" rel="noreferrer">official docs</a> first.</p><p>For example, we need to build aarch64 kernel image:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">LTO</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">thin</span><span style="color:#E1E4E8;"> BUILD_CONFIG</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">common/build.config.gki.aarch64</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">build/build.sh</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">LTO</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">thin</span><span style="color:#24292E;"> BUILD_CONFIG</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">common/build.config.gki.aarch64</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">build/build.sh</span></span></code></pre></div><p>Don&#39;t forget to add the <code>LTO=thin</code> flag, otherwise the build may fail if your computer&#39;s memory is less then 24Gb.</p><p>Starting from Android 13, the kernel is built by <code>bazel</code>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tools/bazel</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--config=fast</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">//common:kernel_aarch64_dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tools/bazel</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--config=fast</span><span style="color:#24292E;"> </span><span style="color:#032F62;">//common:kernel_aarch64_dist</span></span></code></pre></div><h2 id="build-kernel-with-kernelsu" tabindex="-1">Build Kernel with KernelSU <a class="header-anchor" href="#build-kernel-with-kernelsu" aria-label="Permalink to &quot;Build Kernel with KernelSU&quot;">​</a></h2><p>If you can build the kernel successfully, then build KernelSU is so easy, Select any one run in Kernel source root dir:</p><ul><li>Latest tag(stable)</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LSs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LSs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span></code></pre></div><ul><li>main branch(dev)</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LSs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LSs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span></span></code></pre></div><ul><li>Select tag(Such as v0.5.2)</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-LSs</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v0.5.2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-LSs</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v0.5.2</span></span></code></pre></div><p>And then rebuild the kernel and you will get a kernel image with KernelSU!</p>`,24),p=[o];function t(r,c,i,d,y,u){return a(),e("div",null,p)}const F=s(n,[["render",t]]);export{E as __pageData,F as default};