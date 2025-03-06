
# Embedding Wallmates Savings Calculator in Webflow

Follow these steps to add the Savings Calculator to your Webflow site:

## Step 1: Build the Calculator

1. Run `npm run build` in the project directory
2. The build will create files in the `dist` folder

## Step 2: Host the Built Files

Upload the generated files from the `dist/assets` folder to a CDN or web hosting service:
- The JavaScript file: `wallmates-calculator-[hash].js`
- The CSS file: `index-[hash].css`

## Step 3: Add to Webflow

### Option 1: Embed Code in a Specific Page

1. In Webflow, go to the page where you want to add the calculator
2. Add an "Embed" element to your page
3. Paste the following code (replace the URLs with your hosted files):

```html
<!-- Styles -->
<link rel="stylesheet" href="https://your-cdn.com/path/to/index-[hash].css">

<!-- Container for calculator -->
<div id="wallmates-savings-calculator"></div>

<!-- Calculator script -->
<script src="https://your-cdn.com/path/to/wallmates-calculator-[hash].js"></script>
```

### Option 2: Add to All Pages (Custom Code)

1. Go to Project Settings → Custom Code
2. In the "Head Code" section, add:

```html
<!-- Styles -->
<link rel="stylesheet" href="https://your-cdn.com/path/to/index-[hash].css">
```

3. In the "Footer Code" section, add:

```html
<!-- Calculator script -->
<script src="https://your-cdn.com/path/to/wallmates-calculator-[hash].js"></script>
```

4. Then, on any page where you want to show the calculator, add an Embed element with:

```html
<div id="wallmates-savings-calculator"></div>
```

## Troubleshooting

- If the calculator doesn't appear, check the browser console for errors
- Make sure the container ID matches exactly: `wallmates-savings-calculator`
- Verify that the file paths to your hosted JavaScript and CSS files are correct
