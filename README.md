
# SFM (Songa Finance Manager)

Ce projet contient une app web modulaire complète : SFM Cash, Travel, Tontine, Widgets, Auth, etc.

## 📦 Modules principaux
- **sfm_cash** : Gestion des finances, revenus, dépenses
- **sfm_travel** : Séjours touristiques, réservation, publication d'offres
- **sfm_tontine** : Système de tontine collaborative
- **widgets** : Convertisseur, agenda, météo, calculatrice, etc.
- **auth** : Connexion / inscription
- **dashboard** : Vue admin simplifiée

---

## 🔐 Authentification Firebase (prévue)
Tu peux connecter l’app à Firebase Authentication pour gérer :
- Inscriptions
- Connexions sécurisées
- Gestion d’accès (admin, pro, team)

## ☁️ Stockage Firebase Firestore (prévu)
Les packs de voyage créés via `sfm_travel` seront sauvegardés :
- Dans `travel_packs`
- Avec : titre, prix, durée, description
- Synchronisation en temps réel possible

---

## 📁 Fichiers
- `index.html` : Accueil général (à créer)
- `style.css` : Styles partagés
- `assets/` : Données simulées ou statiques
- `README.md` : Ce fichier

---

## 🚀 Déploiement
Dépose simplement le contenu du dossier sur [Netlify](https://netlify.com) ou [GitHub Pages].

---

## ✅ À faire ensuite
- Ajouter Firebase config JS (`firebaseConfig`)
- Ajouter page d'accueil avec navigation entre modules
- Ajouter backend réel si besoin

