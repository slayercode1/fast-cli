# Fast CLI (v0.1.0 Beta) -The CLI tool for Express

Fast CLI est un mini framework basé sur Express pour créer rapidement des applications API. Il est conçu pour faciliter le processus de création et de déploiement de projets Express en fournissant une structure de base préconfigurée.

<br>

#### Commande

| Nom | Cli |
|---|---|
**init** | --init |
**ressource** | -r, --resource |
**controller** |--controller |
**interface** | -i, --interface |
**enums** | --enum |

<br>

## Installation

Pour installer Fast CLI, suivez les étapes suivantes :

1. Assurez-vous d'avoir Node.js installé sur votre système.

2. Téléchargez ou clonez ce référentiel sur votre machine locale.

3. Accédez au dossier cli à l'aide de la commande suivante :

```bash
cd cli
```

4. Exécutez la commande suivante pour installer Fast CLI globalement :

```bash
npm install -g .
```

ou si vous voulez l'installer localement pour votre projet :

```bash
npm install -g fast-cli
```

Cette commande installe Fast CLI globalement sur votre système, vous permettant de l'utiliser n'importe où dans votre terminal.

## Utilisation

Une fois Fast CLI installé, vous pouvez l'utiliser pour générer un projet Node.js à l'aide d'un template prédéfini. Voici les étapes :

1. Exécutez la commande Fast CLI suivante pour générer un template de projet Node.js dans un répertoire spécifié :

```bash
fast -i [PROJECT NAME]
```

Cette commande génère un template de projet Node.js préconfiguré dans le répertoire my-app.

2. Une fois la commande terminée, accédez au répertoire du projet :

```bash
cd [PROJECT NAME]
```

3. Vous pouvez maintenant commencer à ajouter des ressources à votre projet en utilisant la commande Fast CLI genere. Par exemple, pour générer une ressource "user", exécutez la commande suivante :

```bash
fast -r user
```

Cette commande génère les fichiers et les routes nécessaires pour gérer la ressource "user" dans votre projet.

4. Vous êtes maintenant prêt à développer votre application Node.js ! Vous pouvez exécuter le serveur de développement en utilisant la commande suivante :

```bash
npm run start:dev
```

Le serveur sera démarré et votre application sera accessible à l'adresse `http://localhost:3000`.

## Contribuer

Si vous souhaitez contribuer à Fast CLI, n'hésitez pas à envoyer des pull requests ou à ouvrir des problèmes dans le référentiel GitHub officiel.
