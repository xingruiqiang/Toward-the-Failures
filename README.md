# 致敬失败者 · Toward the Failures

> **100 位先辈的至暗时刻与不朽遗产**
> *The Darkest Hours and Enduring Legacies of 100 Forebears*

一部**中英对照**的免费在线人物传记集。写给每一个身处困局、还没有放弃的人。

---

## 这是什么

苏格拉底被投票处死。孔子被形容成"丧家之狗"。哥白尼到临死才敢出版自己的书。梵高生前只卖出一幅画。图灵被化学阉割。张志新因为不肯改口而被处决。

按任何一个时代的标准，他们都输过。

这本书用 **100 篇短传记**，讲他们输了之后做了什么——以及他们留下的东西，如何比误解他们的那个时代活得更久。全书分五辑：

| 辑 | 辑名 | 篇目 |
|---|---|---|
| 第一辑 | 生不逢时的先行者 | 1—23（爱迪生…香农） |
| 第二辑 | 屡败屡战的坚韧行者 | 24—43（林肯…韩信） |
| 第三辑 | 在废墟上重建的人 | 44—62（福特…雷军） |
| 第四辑 | 用痛苦喂养的灵魂 | 63—82（海明威…徐渭） |
| 第五辑 | 走向未知的人 | 83—100（麦哲伦…黄大年） |

每一篇文末都附**《史料来源与辨析》**，逐条区分**史实／通行说法／传说／存疑**——不把传说写成事实，也不为了好看牺牲准确。

---

## 在线阅读

在线阅读（GitHub Pages）：

```
https://xingruiqiang.github.io/Toward-the-Failures/
```

---

## 网页版目录结构

```
docs/                     ← GitHub Pages 发布目录（直接上传即可）
├── index.html            主页：封面、简介、五辑目录、搜索
├── toc.html              完整目录（100 篇清单）
├── preface.html          总序（中英对照）
├── afterword.html        后记（中英对照）
├── part-1.html … part-5.html   五个专辑页（辑导语 + 本辑人物）
├── p/001.html … p/100.html     100 个人物章节页（逐段中英对照）
├── assets/style.css      样式（宣纸／夜读双主题、响应式、打印友好）
├── assets/app.js         交互（语言切换、字号、目录抽屉、搜索、键盘翻页）
├── 404.html · sitemap.xml · robots.txt · .nojekyll
```

**阅读体验**：每页右上角可切换 **中英对照 / 仅中文 / EN**，可调字号（A− A+）、可切夜读模式；☰ 展开全书目录并支持筛选；篇末有上一篇／下一篇导航，**每页顶部与底部都有返回主页的链接**。手机、平板、桌面都已适配。

---

## 部署到 GitHub Pages（约 3 分钟）

### 方式一：整个仓库发布（推荐，最简单）

1. 在 GitHub 新建一个仓库（例如 `toward-the-failures`），**不要**勾选自动生成 README。
2. 在本目录下执行（把地址换成你自己的）：

   ```bash
   git init
   git add .
   git commit -m "《致敬失败者》中英对照网页版"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```

3. 打开仓库 → **Settings → Pages** → Source 选择 **Deploy from a branch**，
   Branch 选 **main**、文件夹选 **/docs** → 点 **Save**。
4. 等 1—2 分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`。

### 方式二：只发布网页

如果不想把 `.docx` / `.pdf` 原稿一起上传，可以只把 `docs/` 里的内容作为仓库根目录：

```bash
mkdir toward-the-failures && cd toward-the-failures
cp -r ../致失败者/docs/* .
git init && git add . && git commit -m "《致敬失败者》网页版"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git push -u origin main
```

然后在 **Settings → Pages** 里把文件夹选成 **/ (root)**。

> `sitemap.xml` / `robots.txt` 已按真实网址
> `https://xingruiqiang.github.io/Toward-the-Failures/` 生成，便于搜索引擎收录。

---

## 版权与使用

- 文字著作权归作者 **邢瑞强** 所有。
- 欢迎自由阅读、转载链接、课堂使用；**转载请注明作者与出处**，请勿用于商业出版。
- 英文译文由 AI 在作者指导下完成，风格力求贴近原文；若发现误译或史实问题，欢迎提 Issue 指正。

---

## 原稿

同目录下另有：

- `《致敬失败者》全书.docx` / `.pdf` —— 排版完整的纸质书版本（A4，约 500 页，含封面、总序、带页码目录、五辑、后记）
- `1.…docx` ～ `100.…docx` —— 100 篇单篇文档
- `初心.txt` / `100位初选名单.txt` —— 创作缘起与名单

---

*二〇二六年十月 · 邢瑞强*
