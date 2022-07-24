import React, { Component } from 'react';
import {
  Container,
  Row
} from 'reactstrap';
import HeaderContainer from '../../containers/HeaderContainer/HeaderContainer';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addNewUser,
  removeUser,
  UserID,
  UserType,
} from "../../store/login/auth";
// import './index.css';


function PrivacyPolicy () {




      const userId = useAppSelector(UserID);

      return(
				<div>
				             <HeaderContainer user={userId} />

            <Row>
              
                <Container style={{width: "100%"}} className="mt-5 mb-5">
                  <h1 style={{fontSize:"22px", color:"#061da5"}}> {'Conditions d’utilisations'}</h1>
                  <br />
                  <br />
                  <p className="font-size-14 text-secondary">
                  
<h3>1.Généralités</h3>
L’utilisation du site Internet maracanafoot.com (ci-après le « Site »), lequel est une propriété de Maracana, est soumise aux présents conditions d’utilisations (ci-après les « Conditions d’utilisation »). 
En décidant de naviguer sur le Site, ou en l’utilisant depuis une communication sans fil, d’un média social ou l’une de ses fonctionnalités, sur tous supports informatiques ou technologiques, l’Utilisateur accepte d’être lié par celles-ci. L’Utilisateur reconnaît avoir lu et compris ces Conditions d’utilisation, et comprend que les présentes Conditions d’utilisation constituent une entente entre lui et Maracana.
La présente entente concernant les Conditions d’utilisations (ci-après « l’Entente ») définit les Conditions d’utilisation concernant le Site par tout Utilisateur. 
Utilisateur désigne toute personne physique ayant accès au Site Internet et/ou à l’Application, à titre non professionnel, quel que soit le lieu où elle se trouve et les modalités de sa connexion à au Site Internet et/ou à l’Application. 
L’Utilisateur peut donc être un Abonné ou de façon plus générale un simple internaute.
L’Utilisateur est responsable de la protection de la confidentialité des informations personnelles qu’il fournit au Site. 
<li>À cet effet, l’Utilisateur est invité à consulter la Politique de confidentialité qui se trouve sur le présent Site.</li>
<br /><br /><br />
<h3>2. Modifications</h3>
Les Conditions d’utilisation ainsi que la Politique de confidentialité peuvent faire l’objet de modifications ou d’amendements, et ce, sans préavis et à la discrétion de Maracana. Si tel était le cas, Maracana s’engage à publier ces changements sur la page d’accueil du Site. Il est du devoir de l’Utilisateur de consulter la présente section du Site afin d’être informé des dernières modifications. Toute modification de ces Conditions d’utilisation sera en vigueur dès la publication de l’avis de modifications sur le Site.
Le fait d’utiliser le Site après la publication des modifications apportées aux Conditions d’utilisation et à la Politique de confidentialité vaudra acceptation de la part de l’Utilisateur desdites modifications.
<br /><br /><br />
<h3>3. Limitations et propriété des éléments du Site</h3>
Le Site Internet et l’Application permet à l’Utilisateur d’avoir accès aux contenus suivants via un ordinateur, un smartphone et/ou une tablette iOS et Android :
<li>– articles d’actualité sur tout les sports</li>
<li>– vidéos,</li>
<li>– statistiques sportives</li>
<p>le design Web, l’idée originale, les logos, la conception et la structure. Ces éléments sont protégés par la Loi sur le droit d’auteur. Sauf en vertu de la Loi, toute reproduction est interdite, à moins d’avoir obtenu le consentement écrit de Maracana. L’Utilisateur peut communiquer avec Maracana afin d’obtenir plus d’informations à ce sujet, que ce soit pour obtenir de l’information quant aux conditions d’obtention du consentement et/ou concernant les règles à respecter. 
L’Utilisateur peut communiquer avec Maracana via ce courriel : contact@journalmaracana.com.</p>
Le contenu diffusé sur le Site, de manière non limitative, appartient à Maracana. Que ce soit le Profil des Utilisateurs, leurs informations, les évaluations ou commentaires effectués par les Utilisateurs ainsi que tout contenu publié par un Utilisateur.
<br /><br /><br />
<h3>4. Liens externes</h3>
Ce Site peut contenir des liens vers d’autres sites web. Maracana n’est pas responsable des Conditions d’utilisations de ces autres sites. Il est fortement recommandé de lire les renseignements concernant les termes et les conditions d’utilisation de ces autres sites.
Il se peut que certains sites appartenant à des Utilisateurs soient diffusés sur le Site. Il est à noter que toutes les interactions avec ces derniers doivent se conformer aux Conditions d’utilisation de Maracana. Maracana n’est pas responsable de toute garantie concernant le contenu ou l’exactitude du matériel sur ces sites tiers. Si l’Utilisateur décide d’accéder à ces Sites externes, il le fait à ses risques et périls.
<br /><br /><br />
<h3>5. Comportement des Utilisateurs</h3>
<li>Le Site Internet, l’Application et les contenus qui y sont publiés, sont réservés à un usage strictement privé et non marchand de l’Utilisateur, et non destinés à une utilisation collective, gratuite ou payante.</li>
<li>L’Utilisateur accepte de ne pas utiliser le Site Internet ni l’Application pour tout usage illégal ou non permis par les présentes conditions générales d’utilisation. À titre d’exemple, sans que cette liste ne soit limitative, l’Utilisateur accepte que lors de ses utilisations du Site Internet et/ou de l’Application, il ne fera rien de ce qui suit:</li>
<li>Diffamation, abus, harcèlement, menace, atteinte à la vie privée et au droit à l’image, ou autre violation des droits d’autrui (tel le droit à la vie privée).</li>
<li>Proposition de rapports sexuels tarifés, racolage, prostitution, proxénétisme.</li>
<li>Tout comportement susceptible de constituer une infraction pénale.</li>
<li>Publication de propos injurieux ou racistes, d’incitations à la haine.</li>
<li>Téléchargement ou transfert de fichiers, dont l’Utilisateur ne serait pas propriétaire ou sur lesquels il n’aurait aucun droit, contenant des logiciels ou autre matériel protégés par le droit de la propriété intellectuelle ou pouvant porter atteinte à la vie privée, au droit à l’image, au secret des affaires, ou à tout autre droit reconnu par le système juridique algérien.</li>
<li>Téléchargement ou transfert de fichiers contenant des virus, fichiers corrompus ou autre logiciel ou programme semblable qui pourrait endommager ou empêcher l’utilisation du Site Internet ou de l’Application.</li>
<li>Effacement de tout crédit d’auteur, avis légal, désignation de propriété ou étiquette de tout fichier qui sera téléchargé sur le Site Internet et/ou l’Application.</li>
<li>Falsification de l’origine ou de la source d’un logiciel ou d’un autre matériel contenu dans un fichier téléchargé sur le Site Internet ou l’Application.</li>
<li>Annonce ou offre de vente de tout bien ou service, tenue ou réacheminement de sondage, concours ou chaîne de lettres.</li>
<li>Téléchargement de tout fichier mis en ligne, par un autre Utilisateur dont il connaît l’origine illicite et dont la distribution serait illégale.</li>
<li>Maracana se réserve le droit de prendre toute mesure, ou d’engager toute action qu’il estime nécessaire au cas où son Site Internet et/ou son Application serait utilisés pour diffuser des éléments de cette nature.</li>
<br /><br /><br />
<h3>6. Responsabilité</h3>
Il est techniquement impossible de fournir l’accès au Site Internet ou à l’Application exempt de tout défaut et ces défauts peuvent conduire à l’indisponibilité temporaire du Site Internet et de l’Application; le fonctionnement du Site Internet et/ou de l’Application peut être affecté par des événements que l’Editeur ne contrôle pas, comme par exemple les défaillances des moyens de transmission et de communication entre le Site Internet et d’autres réseaux. En conséquence, l’Utilisateur admet que l’Editeur n’offre aucune garantie quant à l’utilisation, aux résultats, à la fiabilité, ou l’actualité des Services, du Site Internet et de l’Application. L’Editeur et/ou ses fournisseurs pourront, à tout moment, modifier ou interrompre temporairement ou de façon permanente tout ou partie de l’Application et/ou des Services pour effectuer des opérations de maintenance et/ou effectuer des améliorations et/ou des modifications sur le Site Internet et/ou l’Application.
L’Editeur s’efforcera d’informer l’Utilisateur de chaque modification et/ou interruption des Services disponibles sur le Site Internet et/ou l’Application.
L’Utilisateur admet, compte tenu de la nature des Services, du Site Internet et de l’Application, que l’Editeur peut être amené à modifier sans préavis le contenu du Site Internet et/ou de l’Application, en ajoutant ou supprimant des parties du contenu des Services.
<p>L’Editeur ne saurait être tenu responsable :
<li>de tout dysfonctionnement ou de toute interruption dans la mise à disposition du Site Internet, de l’Application et des Services liés à ou résultant d’un cas de force majeure;</li>
<li>d’un quelconque dommage subi par l’Utilisateur au titre de l’utilisation du Site Internet et/ou de l’Application </li>
  <li>(i) si ce dommage résulte, en tout ou en partie, de l’action ou de l’omission de l’Utilisateur et/ou de tout tiers, </li>
  <li>(ii) si ce dommage est dû à une incompatibilité technique entre les équipements de l’Utilisateur et ceux du Site Internet, de l’Application ou des Services ;</li>
<li>d’une quelconque indisponibilité d’un ou plusieurs contenu(s), si celle-ci est due à des facteurs ne dépendant ni des Services ni de l’Application ni du Site Internet (tels que des raisons techniques ou éditoriales, l’encombrement du réseau, une défaillance des fournisseurs d’accès à Internet etc.).</li></p>
<li>Maracana  ne peut être tenue responsable de l’utilisation d’un Profil d’un Utilisateur, que ce soit de manière intentionnelle ou non. Il est donc du devoir de chaque Utilisateur de protéger les informations relatives à sa connexion du Profil afin d’empêcher quiconque d’y accéder.</li>
<br /><br /><br />
<h3>7. Inscription et compte d’Utilisateur</h3>
L’Editeur est amené à collecter des données à caractère personnel concernant l’Utilisateur notamment lors de la connexion au Site Internet ou de l’utilisation de l’Application.

Dans ce cadre, il peut être demandé à l’Utilisateur ses coordonnées : adresse e-mail, nom, prénom et autres informations nominatives pour intervenir sur une partie participative du Site Internet et/ou de l’Application afin de bénéficier d’une offre spéciale, de participer à un jeu concours…
Certaines informations demandées dans les formulaires ont un caractère obligatoire. Elles sont signalées par un astérisque. Si l’Utilisateur choisit de ne pas les communiquer, l’Editeur ne sera pas à même de traiter sa demande.

Seules les données personnelles fournies volontairement par l’Utilisateur sont recueillies. L’Editeur les utilise pour répondre aux demandes de l’Utilisateur concernant certains Services, ainsi que pour optimiser le fonctionnement et l’efficacité du Site Internet et/ou de l’Application.
L’Editeur s’engage à ne pas vendre ou communiquer à des tiers les données personnelles de ses Utilisateurs sans leur accord préalable. Ces informations sont conservées, sécurisées et utilisées par l’Editeur à titre strictement confidentiel et dans le cadre exclusif du fonctionnement du Site Internet et/ou de l’Application.
Tout compte d’Utilisateur portant un nom d’utilisateur offensant ou vulgaire sera supprimé sans préavis par Maracana.
<p>L’Utilisateur est seul responsable de la confidentialité du mot de passe choisi et doit aviser Maracana à l’adresse contact@journalmaracana.com de toute utilisation non autorisée ou d’utilisation par autrui de son compte.</p>
L’Utilisateur est responsable de toute utilisation du compte qu’il détient et est responsable de toute activité qui a lieu sous son nom d’utilisateur. Maracana ne peut être tenue responsable d’un usage non autorisé ni du non respect de la présente section
<br /><br /><br />
<h3>8.Propriété intellectuelle</h3>
Le Site Internet, l’Application et chacun des éléments qui les composent (leur arborescence, les marques, graphismes, textes, photographies,…) relèvent de la législation algérienne et internationale notamment celle relative au droit d’auteur, aux bases de données et à la propriété intellectuelle.
L’Editeur est le propriétaire exclusif de tous les droits de propriété intellectuelle portant tant sur la structure que sur le contenu du Site Internet et de l’Application. En particulier, la marque maracanafoot.com, et son logo sont enregistrés à titre de marque en Algérie.
Les présentes conditions générales d’utilisation n’entraînent le transfert d’aucun droit de propriété intellectuelle au profit de l’Utilisateur ou de l’Abonné tant sur la structure que sur le contenu de l’Application
Ainsi, l’Utilisateur s’engage notamment à ne pas utiliser les contenus diffusés sur le Site Internet et/ou l’Application de manière à porter atteinte aux droits de l’Editeur et à ce que cette utilisation ne constitue pas une contrefaçon ou une concurrence déloyale ou parasitaire desdits contenus.
Engagent la responsabilité de l’Utilisateur et sont susceptibles d’entraîner des poursuites judiciaires, notamment pour contrefaçon :
Toute reproduction, représentation, publication, transmission, ou plus généralement toute exploitation non autorisée du Site Internet, de l’Application et/ou de leurs éléments ;
Toute extraction ou réutilisation, y compris à des fins privées, d’une partie substantielle du contenu des bases de données constituées sur le Site Internet ou l’Application ;
Toute extraction ou réutilisation, répétée et systématique, y compris à des fins privées, d’une partie même non substantielle du contenu des bases de données constituées sur le Site Internet ou l’Application ;
Tout lien, accès, modification, ajout, suppression qui porte sur le système de traitement automatisé de l’édition en ligne et modifie les conditions de publication ou la politique éditoriale.
Tout lien hypertexte dirigeant vers le Site Internet doit faire l’objet d’une autorisation préalable de l’Editeur.
<br /><br /><br />
<h3>9. Vérification</h3>
Maracana se réserve le droit de procéder à des vérifications de manière aléatoire du fonctionnement du Site ainsi que de son contenu publié dans le but de s’assurer de la conformité des Conditions d’Utilisation ainsi que dans le but de respecter toute loi, tout règlement ou toute demande dans le cadre d’une requête d’ordonnance d’un tribunal ou tout organisme de régulation.
<br /><br /><br />
<h3>10. Information partagée</h3>
L’Utilisateur comprend que l’information nécessaire concernant ses coordonnées ou les projets soumis seront partagés par Maracana à d’autres Utilisateurs afin de permettre le contact entre les parties. Par souci d’efficacité, l’Utilisateur accepte d’être contacté par Maracana pour faire suite à son appel d’offres ou à sa demande. Maracana invite l’Utilisateur à prendre connaissance de sa Politique de confidentialité qui traite de la manière dont les Renseignements personnels sont recueillis et utilisés.
<br /><br /><br />
<h3>11. Contact</h3>
Pour toute question ou information relativement à ces conditions d’utilisations d’utilisation, veuillez contacter Maracana à contact@journalmaracana.com


                    </p>
                  
                  
                </Container>
            
            </Row>
					</div>
			);
    
}

export default PrivacyPolicy;
