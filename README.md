# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
Un test de chez test

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Voici les étapes détaillées avec les commandes pour déployer manuellement un site sur GitHub Pages :

Créez une branche gh-pages :

bash
Copy code
git checkout -b gh-pages
Générez vos fichiers de construction :
Utilisez l'outil de construction de votre projet pour générer les fichiers de votre site. Par exemple, si vous utilisez npm :

bash
Copy code
npm run build
Copiez les fichiers de construction :
Copiez les fichiers générés (HTML, CSS, JavaScript, images, etc.) depuis le répertoire de construction vers le répertoire racine du projet.

Ajoutez les fichiers au suivi Git :
Ajoutez les fichiers nouvellement générés au suivi Git :

bash
Copy code
git add .
Effectuez un commit :
Committez les fichiers ajoutés avec un message descriptif :

bash
Copy code
git commit -m "Ajout des fichiers de construction pour GitHub Pages"
Poussez les changements sur la branche gh-pages :
Poussez les modifications sur la branche gh-pages de votre référentiel GitHub :

bash
Copy code
git push origin gh-pages
Une fois ces étapes terminées, votre site devrait être déployé sur GitHub Pages à partir de la branche gh-pages. Vous pourrez y accéder via l'URL spécifiée dans les paramètres de GitHub Pages pour votre référentiel. Assurez-vous que les paramètres de votre référentiel sont configurés pour utiliser la branche gh-pages comme source pour GitHub Pages.
