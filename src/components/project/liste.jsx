import pharmacie from '../../assets/images/projets/pharmacie.png'
import election from '../../assets/images/projets/election.png'
import commerce from '../../assets/images/projets/ecommerce.png'
import upwork from '../../assets/images/projets/upwork.png'
import quizz from '../../assets/images/projets/quizzs.png'
import laravel from '../../assets/images/projets/laravel.png'
import jeu from '../../assets/images/projets/jeu.png'
export const items = [
     {
          image:pharmacie,
          title: "Gestion de pharmacie", 
          description:`Gestion de pharmacie en Symfony et JavaScript pour 
                       administrer les médicaments, les catégories et les ventes via une interface intuitive.`,
          techno: [
               'Symfony 7', 'JavaScript', 'MySQL'
          ]
     },
     {
          image:laravel,
          title: "Système de blog", 
          description:`Une plateforme permettant aux utilisateurs de publier 
                       des articles et de commenter, avec un système de gestion pour les administrateurs et utilisateurs.`,
          techno: [
               'Laravel 10', 'JavaScript', 'MySQL'
          ]
     },
     {
          image:election,
          title: "Gestion d'éléction", 
          description:`Ce projet gère les éléctions en lignes. HTML et CSS pour l'interface,
                       JavaScript pour l'intéraction et PHP pour le traitement des données.`,
          techno: [
               'HTML / CSS', 'PHP', 'JavaScript', 'MySQL'
          ]
     },
     {
          image:commerce,
          title: "Site e-commerce", 
          description:`Développement d'une plateforme e-commerce avec Symfony 7
                       pour la gestion complète du Back-End, incluant la gestion des produits,
                       des utilisateurs et des commandes.`,
          techno: [
               'Symfony 7', 'JavaScript', 'MySQL'
          ]
     },
     {
          image:upwork,
          title: "UpWork", 
          description:`Plateforme de freelance où les utilisateurs peuvent consulter des offres d'emploi et 
                         créer des profils. Utilise React pour une interface moderne et PHP pour la gestion des données.`,
          techno: [
               'ReactJS', 'PHP', 'MySQL'
          ]
     },
     {
          image:quizz,
          title: "QUIZZ en JavaScript", 
          description:`Quizz en JavaScript où les questions et les réponses 
                       sont chargées depuis un fichier JSON, offrant une expérience intéractive et dynamique.`,
          lien: 'https://js-quizz-app.vercel.app',
          techno: [
               'JavaScript', 'JSON'
          ]
     },
     {
          image:jeu,
          title: "Share life", 
          description:`Un jeu de survie où le joueur, naufragé sur une île après un crash d'avion, doit collecter des ressources et gérer sa survie pour éspérer être secouru`,
          techno: [
               'C#', 'Unity', 'Blender'
          ]
     },
]