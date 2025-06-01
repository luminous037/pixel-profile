### **Goal**: 
Added the ability to display the top three most used languages in Github.
- Original Features: **Pixel Profile**: Generate pixel art profiles from your GitHub data
- before: <img width="788" alt="image" src="https://github.com/user-attachments/assets/4c13f3dd-e13c-4dad-a6fc-98e9dedb43a4" />
- after:<img width="791" alt="image" src="https://github.com/user-attachments/assets/428d7025-9611-4ddf-a477-bf454449878c" />

### **Requirements**
- Node.js ≥ 18.17.0
- pnpm 9.7.0

- dependencies
  **- Development Tools & Build**
  typescript@5.8.3
  
  tsup@8.0.2
  
  turbo@2.0.14
  
  cross-env@7.0.3
  
  concurrently@7.6.0

  **- Linting / Formatting / Pre-hooks**
  eslint@8.57.0
  
  eslint-config-standard@17.1.0
  
  eslint-config-prettier@9.1.0
  
  eslint-plugin-prettier@5.1.3
  
  eslint-plugin-promise@6.6.0
  
  eslint-plugin-react@7.33.2
  
  eslint-plugin-node@11.1.0
  
  eslint-plugin-import@2.29.1
  
  eslint-plugin-eslint-comments@3.2.0
  
  eslint-import-resolver-typescript@2.7.1
  
  prettier@3.1.1
  
  husky@8.0.3
  
  lint-staged@15.2.0
  
  **- Server / Framework Related**
  @hono/node-server
  
  hono
  
  vercel@36.0.0
  
  **- Runtime Libraries**
  axios
  
  dotenv
  
  jimp
  
  github-username-regex
  
  satori
  
  @resvg/resvg-js
  
  **- Testing**
  vitest@3.1.2
  
  **- Utilities**
  ts-known
  
  bumpp@9.3.0

### **How to install & Run**

1. run docker image & enter container shell
  docker run -p 3000:3000 -it final_2023040017:v1

2. move to project directory
   cd ~
   ~# cd pixel-profile

3. run server
   ~# node --experimental-modules packages/pixel-profile-server/dist/node.js
4. Enter the url below into your browser
   ```html
   https://api/github-stats?username=<your-github-username>&theme=lex
   ```

6. you can select other themes or hide stats.

#### 1. without pixelated effect
![Journey](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-journey-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=journey&pixelate_avatar=false
```
#### With dithering.
The `dithering=true` configuration is a standalone setting that can be applied to any theme.

![Journey](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-journey-theme-and-dithering-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=journey&dithering=true&hide=avatar
```

#### 2. Road trip without pixelated avatar.
![Road Trip](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-road-trip-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=road_trip&pixelate_avatar=false
```

#### 3. Fuji Theme
![Fuji](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-fuji-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=fuji
```

#### 4. Rainbow Theme
![Rainbow](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-rainbow-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=rainbow
```

#### 5. Monica Theme
![Monica](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-monica-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=monica
```

#### 6. Summer Theme
![Summer](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-summer-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=summer
```

#### 7. Lax Theme
![Lax](./packages/pixel-profile/test/__image_snapshots__/theme-test-ts-theme-render-card-with-lax-theme-1-snap.png)
```html
https://pixel-profile.vercel.app/api/github-stats?username=<username>&theme=lax
```


### Github Stats Card Options

| Name                  | Description                                                                                                                                           | Default value |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `background`          | Set background color/image. Supports a subset of CSS background property values                                                                       | `#434343`     |
| `color`               | Set text color to any valid CSS color value                                                                                                           | `white`       |
| `hide`                | Hide specific stats or elements by passing a comma-separated list. Valid keys: 'avatar', 'commits', 'contributions', 'issues', 'prs', 'rank', 'stars' |               |
| `include_all_commits` | Count all commits                                                                                                                                     | `false`       |
| `pixelate_avatar`     | Apply pixelation to avatar                                                                                                                            | `true`        |
| `screen_effect`       | Enable curved screen effect                                                                                                                           | `false`       |
| `username`            | GitHub username                                                                                                                                       | ''            |
| `theme`               | Check out the built-in themes below                                                                                                                   | ''            |
| `dithering`           | Rendered the image using a 256-color palette with dithering                                                                                           | `false`       |


### Hiding individual stats

You can pass a query parameter `&hide=` to hide any specific stats with comma-separated values.

> Options: `&hide=avatar,commits,contributions,issues,prs,rank,stars`
```html
<!--Replace <username> with your own GitHub username.-->
https://pixel-profile.vercel.app/api/github-stats?username=<username>&hide=rank
```
![Hiding individual stats](./packages/pixel-profile/test/__image_snapshots__/github-stats-test-ts-packages-pixel-profile-test-github-stats-test-ts-github-stats-render-card-without-rank-with-theme-1-snap.png)


