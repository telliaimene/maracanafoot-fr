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
             
					<div >
            <Row>
              
                <Container style={{width: "100%"}} className="mt-5 mb-5">
                  <h1 style={{fontSize:"22px", color:"#061da5"}}> Conditions d'utilisations</h1>
                  <br />
                  <br />
                  <p className="font-size-14 text-secondary">
                  
                  <h3>VEUILLEZ LIRE ATTENTIVEMENT LA PRÉSENTE POLITIQUE DE CONFIDENTIALITÉ</h3>
La confidentialité des informations de l’Utilisateur est importante pour Maracana et elle met tout en œuvre pour la préserver et protéger toute information que l’Utilisateur pourrait décider de lui communiquer.
La collecte d’informations se fait uniquement dans le cadre des activités de Maracana et dans le seul but de répondre aux demandes des Utilisateurs dans le respect de la Loi sur la protection des renseignements personnels et les documents électroniques (ci-après la « Loi fédérale ») et de la Loi sur la protection des renseignements personnels dans le secteur privé (ci-après la « Loi provinciale »)(Ci-après collectivement appelées la « Loi »)
Cette Politique de confidentialité (ci-après la « Politique ») décrit la manière dont Maracana recueille, utilise, stock et, le cas échéant, divulgue et transfère les renseignements à caractère personnel (ci-après les « Renseignements Personnels ») lorsque l’Utilisateur accède au site byfarsports.com (ci-après le « Site »), crée un profil. Est un Renseignement Personnel tout renseignement qui concerne une personne physique et permet de l’identifier (art. 2 de la Loi provinciale).
Maracana se réserve le droit de modifier la Politique sans préavis. Il est donc de la responsabilité de l’Utilisateur de relire régulièrement la Politique, et ce, de manière attentive. Le fait d’utiliser les Services après la publication des modifications apportées à la présente Politique vaudra acceptation de la part de l’Utilisateur desdites modifications.
Si l’Utilisateur n’est pas d’accord avec les termes de la présente Politique, il est prié ne pas utiliser les Services.
Maracana est responsable des Renseignements Personnels recueillis et c’est dans cette optique qu’elle s’assure du traitement des données recueillies et du respect de la présente Politique.
<br /><br /><br />
<h3>COLLECTE DES RENSEIGNEMENTS PERSONNELS</h3>
Maracana recueille uniquement les Renseignements Personnels nécessaires fournis sur une base volontaire, suivant le droit applicable, lorsque l’Utilisateur interagit avec les Services de Maracana ou lorsqu’il contacte Maracana. De plus, en utilisant les Services et en s’enregistrant, l’Utilisateur choisit de partager ses données telles que, notamment, le nom de l’entreprise, la personne ressource, l’adresse, le courriel, le site web, une description relative aux Services proposés ou demandés. Dans ce cas, Maracana s’engage à respecter un protocole de sécurisation des échanges internet reconnu et fiable. Ces renseignements sont également assujettis à la présente Politique.
En naviguant sur le Site, certains renseignements sont collectés par le biais de fichiers journaux (log file) et de fichiers témoins (cookies) (pour plus d’informations, voir plus-bas la section « Témoins »). Il s’agit notamment, et sans que cette liste soit limitative, des informations suivantes :
<ul>
<li>• Adresse IP et MAC ;</li>
<li>• Système d’exploitation ;</li>
<li>• Pages visitées et requêtes ;</li>
<li>• Heure et jour de connexion ;</li>
<li>• Fournisseur d’accès à Internet.</li>
<p>Sachant que la majorité de ces renseignements sont utilisés de manière globale afin d’optimiser les Services, certains sont utilisés pour bonifier l’expérience de l’Utilisateur ou dans le but de lui proposer des produits correspondant à ses préférences.
Les Renseignements Personnels sont recueillis auprès de l’Utilisateur. Toutefois, Maracana peut, sans son consentement, recueillir ces renseignements auprès d’un tiers si la loi l’autorise. Maracana peut faire de même si elle a un intérêt sérieux et légitime et si l’une ou l’autre des conditions suivantes se réalise :
1) Les renseignements sont recueillis dans l’intérêt de l’Utilisateur et ils ne peuvent être recueillis auprès de ce dernier en temps opportun ;
2) La cueillette auprès d’un tiers est nécessaire pour s’assurer de l’exactitude des renseignements.
</p>
<li>• Témoins (Cookies)</li>
<p>Il est possible que des témoins (cookies), petits fichiers textes stockés sur l’ordinateur qui enregistre certaines informations, soient utilisés afin d’identifier rapidement l’Utilisateur comme Utilisateur unique ou encore dans le but de sauvegarder certains renseignements au sujet de la session et/ou utilisation des Services Maracana.
Des témoins sont créés lorsque l’Utilisateur accède aux Services de Maracana .Ces témoins aident Maracana à améliorer la qualité de ses services et permettent de faire des recommandations à l’Utilisateur.
La section « Aide » de la barre d’outils de la plupart des navigateurs peut indiquer comment empêcher le navigateur d’accepter de nouveaux témoins, comment activer l’alerte qui avertit lorsqu’un nouveau témoin est créé ou comment désactiver tous les témoins. En contrepartie, si l’Utilisateur n’autorise pas l’utilisation des témoins, certaines fonctions du Site ne seront pas disponibles.
Des partenaires de Maracana peuvent être autorisés à installer et accéder à leurs cookies sur l’ordinateur de l’Utilisateur. L’utilisation de ces cookies par ces tiers est soumise à leurs propres politiques concernant les informations personnelles et non à la présente Politique.
</p></ul>
<br /><br /><br />
<h3>UTILISATION DES RENSEIGNEMENTS PERSONNELS</h3>
Il n’est pas nécessaire de fournir des Renseignements Personnels afin d’accéder aux Services. Cependant, dans la mesure du droit applicable, l’Utilisateur ne pourra pas s’inscrire et/ou profiter de certaines fonctionnalités des Services.
Les informations collectées peuvent être utilisées :
<ul>
<li>a) Afin de fournir les Services ou informations demandées, et traiter et réaliser toute opération y afférente ;</li>
<li>b) Afin de vérifier l’identité de l’Utilisateur pour le service à la clientèle ;</li>
<li>c) Afin de prévenir ou détecter une tentative de piratage ou brèche de sécurité ou quelque risque de sécurité que ce soit en lien avec les Services et à des fins de prévention des pertes et de lutte contre la fraude ;</li>
<li>d) Afin de communiquer avec l’Utilisateur de manière plus efficace, par exemple afin d’envoyer des avis importants tels que des modifications des conditions de politiques, ou afin de répondre aux courriels, questions, requêtes, commentaires et fournir un service client ;</li>
<li>e) Afin de générer des statistiques anonymes sur l’utilisation des Services et d’aider Maracana à créer, à développer, à utiliser, à livrer et à améliorer ses services, contenus et publicités ;</li>
<li>f) Afin de réaliser des sondages, des concours et des tirages au sort ;</li>
<li>g) Afin de personnaliser et améliorer les Services et l’expérience de l’Utilisateur, proposer des publicités, des bulletins d’informations, des promotions, des récompenses, ou autres* ;</li>
<li>h) Afin de fournir à l’Utilisateur des actualités et informations à propos des événements, activités, offres, promotions, et services de Maracana;</li>
<li>i) Afin de divulguer des renseignements dans le cadre d’une requête d’ordonnance du tribunal, d’une demande d’un organisme de régulation ou dans le cadre de l’application de la Loi dans le but de protéger et aider à protéger les systèmes de Maracana ainsi que le public ou encore faire respecter un droit, et ce, à la discrétion de Maracana;</li>
<li>j) Toute autre fin décrite dans la présente Politique ou pour laquelle Maracana a informé l’Utilisateur de la collecte, de l’utilisation et du partage des informations et/ou a reçu son consentement.</li></ul>
Il est à noter que Maracana, ses partenaires ou ses employés sont susceptibles de consulter les informations de l’Utilisateur dans l’exercice de leurs tâches afin de le faire bénéficier des Services de Maracana de manière plus adéquate.
Les Renseignements Personnels recueillis par Maracana seront utilisés et stockés pour une durée nécessaire aux fins décrites dans la présente Politique et conformément aux exigences de la Loi fédérale, 
<br /><br /><br />
<h3>PARTAGE DES RENSEIGNEMENTS PERSONNELS</h3>
Maracana ne vendra ou ne louera à quiconque les renseignements personnels de l’Utilisateur recueillis, mais il se peut qu’elle les transmette à un tiers la représentant pour le marketing ou à titre d’aidant dans les cas de résolution de problèmes techniques. Si tel est le cas, en aucun cas Maracana n’octroiera à ces tierces parties le droit de divulguer ou d’utiliser ces informations. Maracana exige qu’elles respectent et approuvent les termes de la présente Politique.
<li>• Achat ou vente d’entreprise</li>
Il est possible que ByFar Maracana achète ou vende une ou plusieurs entreprises, les Renseignements Personnels de l’Utilisateur pourront alors être transférés dans le cadre d’une transaction de ce genre. Dans le cas d’un achat d’entreprise, les Renseignements Personnels recueillis par ladite entreprise seront traités conformément à la présente Politique, dans la mesure du possible. Maracana vend une entreprise ou filiale, elle inclura dans le contrat des stipulations à l’effet que l’acheteur doit traiter les Renseignements Personnels recueillis dans les mêmes conditions que celles prévues dans la présente Politique, dans la mesure du possible. Les stipulations du présent paragraphe s’appliqueront également Maracana est vendue dans le cadre d’une procédure de liquidation.
<li>• Cas de partages requis par la loi ou concernant la sûreté et sécurité de l’Utilisateur</li>
<p>Il est à noter que dans certaines situations, et ce, en vertu de la Loi, Maracana peut collecter, utiliser ou communiquer certains renseignements personnels à l’insu de la personne concernée et cela sans son consentement. Voici notamment quelques exemples:</p>

<li>Dans le propre intérêt de la personne et que, dans un délai approprié, il est impossible d’avoir son consentement ;</li>
<li>S’il y a un risque de compromettre l’exactitude des renseignements en demandant le consentement de la personne, par exemple dans le cadre d’une enquête sur un manquement à un contrat ou sur une infraction à une Loi tant provinciale ou fédérale ;</li>
<li>Si la vie, sécurité ou santé d’une personne est menacée ;</li>
<li>Afin de respecter une assignation, percevoir une créance ou encore un mandat ou autre ordonnance d’un tribunal ou lorsque la Loi l’exige.</li>
<br /><br /><br />
<h3>PROTECTION DES RENSEIGNEMENTS PERSONNELS</h3>
Les Renseignements Personnels recueillis sont ceux jugés essentiels et Maracana les protège au même titre qu’elle protège ses propres renseignements confidentiels. 
Lorsque l’Utilisateur utilise les Services ou qu’il publie des informations sur son profil, dans la section « commentaires » sur les articles ou les débats ou dans la boîte de messagerie, les Renseignements Personnels et le contenu qu’il divulgue sont visibles pour tous. L’Utilisateur est responsable des éléments qu’il choisit de partager ou de publier dans ces circonstances.
Malgré tous les efforts de Maracana pour protéger les Renseignements Personnels de l’Utilisateur, elle ne peut garantir qu’aucune brèche ne se produira. Si une telle chose devait se produire, Maracana avertira que les informations de l’Utilisateur peuvent être à risque.
 Maracana recommande fortement de sécuriser les comptes de l’Utilisateur ainsi que ses renseignements personnels par le biais de mots de passe.
<br /><br />
<b>MALGRÉ TOUS LES EFFORTS DE MARACANA POUR ASSURER LA SÉCURITÉ DES RENSEIGNEMENTS PERSONNELS, AUCUNE SOCIÉTÉ NE PEUT GARANTIR LA SÉCURITÉ ET LA CONFIDENTIALITÉ DE SES SERVICES, INFORMATIONS ET AUTRES DONNÉES. PAR CONSÉQUENT, MARACANA DÉCLINE TOUTE RESPONSABILITÉ ET NE DÉCLARE NI GARANTIT ÊTRE CAPABLE DE PROTÉGER LA CONFIDENTIALITÉ OU LA SÉCURITÉ DE SES DONNÉES CONCERNANT LES RENSEIGNEMENTS PERSONNELS DES UTILISATEURS.</b>
<br /><br /><br />
<h3>ACCÈS AUX RENSEIGNEMENTS PERSONNELS</h3>
<p>Sous réserve des exceptions prévues à la Loi, l’Utilisateur possède un droit d’accès à ses Renseignements Personnels recueillis le concernant. Sur demande, Maracana informe l’Utilisateur de l’existence, si tel est le cas, de ses Renseignements Personnels, de l’usage qui en est fait et du fait qu’ils ont été communiqués à des tiers. L’Utilisateur est également responsable des informations transmises quant à leur exactitude,. L’Utilisateur doit donc aviser Maracana si des changements doivent être effectués.
Si l’Utilisateur souhaite contester, consulter, corriger ou supprimer les Renseignements Personnels le concernant collectés par Maracana, qu’il lui fasse parvenir sa demande à contact@journalmaracana.com.</p>
Les Renseignements Personnels seront alors corrigés, révisés ou supprimés, conformément au droit applicable. Toutefois, Maracana ne pourra conserver des informations de ses fichiers en vue de la résolution de litiges ou de l’application des accords de Maracana, en raison d’exigences d’ordre technique ou juridique ou de faits relatifs à la sécurité, l’intégrité ou l’exploitation des Services de cette dernière.
La demande de l’Utilisateur sera traitée dans un délai de trente (30) jours.
<br /><br /><br />
<h3>REFUS DE FOURNIR LES RENSEIGNEMENTS PERSONNELS</h3>
Afin d’utiliser pleinement les Services, la création d’un Profil d’Utilisateur est nécessaire et donc une divulgation des Renseignements Personnels de la part de l’Utilisateur. Cependant, l’Utilisateur n’est pas obligé de fournir ces Renseignements Personnels, mais il comprend qu’il ne pourra pas profiter pleinement des fonctionnalités offertes par Maracana.
<br /><br /><br />
<h3>QUESTIONS OU COMMENTAIRES</h3>
L’Utilisateur peut contacter Maracana pour toute plainte ou s’il a des questions concernant cette politique de confidentialité. L’Utilisateur peut communiquer avec Maracana via à l’Adresse courriel contact@journalmaracana.com


                    </p>
                  
                  
                </Container>
            
            </Row>
					</div>
				</div>
			);
    
}

export default PrivacyPolicy;
