# 🚀 Backend Configs & Vercel Deployment

Welcome to the world of seamless deployment! In this section, I'll guide you through the deployment process with important notes and powerful configurations.

### 📝 Share Notes

- **Note 1:** Include `index.js` in the `src` directory: `node src`
- **Note 2:** Directly run `index.js` with config from Package.json: `node index.js`
- **Note 3:** Follow this pattern for smooth configurations.

## 🛠️ Vercel.json Configurations for `index.js` in the `src` Directory

```json
{
  "version": 2,
  "name": "basic-upload-test",
  "builds": [{ "src": "src/index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/src/index.js" }]
}

```
## 🛠️ Vercel.json Configurations for index.js in the Main Directory

```json
{
  "version": 2,
  "name": "basic-upload-test",
  "builds": [{ "src": "index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/index.js" }]
}
```

## 📬 Let's Collaborate!

Feel free to reach out to me for collaboration or anything else!

- **Email:** 📧 [soniprince142@gmail.com](mailto:soniprince142@gmail.com)
- **LinkedIn:** 👔 [Prince Soni](https://www.linkedin.com/in/prince9871/)
- **Gmail:** 📮 [Prince Soni](mailto:soniprince142@gmail.com)

Let's connect and build amazing things together! 🚀😊
