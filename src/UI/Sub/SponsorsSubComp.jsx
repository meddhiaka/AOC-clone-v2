import x4c from './../../assets/spn/4c.png'
import eleone from './../../assets/spn/eleone.png'
import stb from './../../assets/spn/stb.png'
import tst from './../../assets/spn/tst.png'
import natilait from './../../assets/spn/natilait.png'
import joba from './../../assets/spn/joba.png'
import './../../App.css'

export default function SponsorsSubComp() {
    return (
        <div>
            <div className='mb-9 max-w-2xl mx-auto text-center pt-10'>
                <span className='inline-block mb-2 md:text-sm text-xs text-yellow-500 font-bold uppercase tracking-widest'>
                    Our Sponsors
                </span>
                <h2 className='font-heading text-xl md:text-4xl text-gray-900 font-black tracking-tight'>
                    Our Loyal Sponsors/ Partenaires
                </h2>
            </div>
            <div className='w-full mx-auto py-4 overflow-hidden block md:hidden'>
                <div className="flex">
                    <div
                        className="animate-marquee flex"
                        style={{
                            animation: 'marquee 20s linear infinite',
                            width: '100%'
                        }}
                    >
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img className="h-48" src={x4c} alt="x" />
                        </div>
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img className="h-48" src={eleone} alt="x" />
                        </div>
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img className="h-48" src={natilait} alt="x" />
                        </div>
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img className="h-48" src={joba} alt="x" />
                        </div>
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img className="h-48" src={stb} alt="x" />
                        </div>
                        <div className="flex-shrink-0 w-full flex items-center justify-center">
                            <img className="h-48" src={tst} alt="x" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div class="bg-gray-100 dark:lg:bg-darker lg:p-16 rounded-[1rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div class="md:7/12 lg:w-1/2 pt-4">
                            <img
                                src={x4c}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                className='w-64 md:w-72  mx-auto '
                            />
                        </div>
                        <div class="md:7/12 lg:w-1/2 pb-1">
                            <h2 class="text-2xl text-center sm:text-left font-bold text-gray-900 md:text-2xl px-4 sm:px-0">
                                LES CENTRES DE CARRIÈRE ET DE CERTIFICATION DES COMPÉTENCES “ 4C ”
                            </h2>
                            <p class="my-8 text-gray-600 px-4 sm:px-0">
                                Les Centres de Carrière et de Certification des Compétences « 4C » est un projet national qui a pour but d’améliorer l’employabilité des étudiants à travers des programmes de conseil, d’accompagnement, de formation et d’ouverture sur l’environnement socio-économique.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-4">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div class="bg-gray-100 dark:lg:bg-darker lg:p-16 rounded-[1rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div class="md:7/12 lg:w-1/2 pt-4">
                            <img
                                src={tst}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                className='w-64 md:w-72  mx-auto '
                            />
                        </div>
                        <div class="md:7/12 lg:w-1/2 pb-1">
                            <h2 class="text-2xl text-center sm:text-left font-bold text-gray-900 md:text-2xl px-4 sm:px-0">
                                TST SARL
                            </h2>
                            <p class="my-8 text-gray-600 px-4 sm:px-0">
                                TST a entamé ses activités par la conception et l'intégration de solutions clé en main. Son projet phare était un système d’automatisme pour le contrôle et la commande d’une chaîne alimentaire au profit d’une firme internationale.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div class="bg-gray-100 dark:lg:bg-darker lg:p-16 rounded-[1rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div class="md:7/12 lg:w-1/2 pt-4">
                            <img
                                src={stb}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                className='w-64 md:w-72  mx-auto '
                            />
                        </div>
                        <div class="md:7/12 lg:w-1/2 pb-1">
                            <h2 class="text-2xl text-center sm:text-left font-bold text-gray-900 md:text-2xl px-4 sm:px-0">
                                SOCIÉTÉ TUNISIENNE DE BANQUE “STB”
                            </h2>
                            <p class="my-8 text-gray-600 px-4 sm:px-0">
                                La Société Tunisienne de Banque est née au lendemain de
                                l'indépendance. Entrée en activité le 26 mars 1958, c'est lepremier établissement bancaire spécifiquement tunisien conçu afin de contribuer efficacement au développement économique et social du jeune Etat indépendant et ce, dans un contexte de désinvestissement, de désorganisation du marché de crédit et d'une véritable hémorragie de capitaux vers l'étranger.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div class="bg-gray-100 dark:lg:bg-darker lg:p-16 rounded-[1rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div class="md:7/12 lg:w-1/2 pt-4">
                            <img
                                src={natilait}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                className='w-64 md:w-72  mx-auto '
                            />
                        </div>
                        <div class="md:7/12 lg:w-1/2 pb-1">
                            <h2 class="text-2xl text-center sm:text-left font-bold text-gray-900 md:text-2xl px-4 sm:px-0">
                                NATILAIT
                            </h2>
                            <p class="my-8 text-gray-600 px-4 sm:px-0">
                                Natilait est une société spécialisée dans l'industrie laitière, allant de la production du lait jusqu'à la fabrication de ses dérivés: le beurre, le yaourt et les produits frais
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div class="bg-gray-100 dark:lg:bg-darker lg:p-16 rounded-[1rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div class="md:7/12 lg:w-1/2 pt-4">
                            <img
                                src={joba}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                className='w-64 md:w-72  mx-auto '
                            />
                        </div>
                        <div class="md:7/12 lg:w-1/2 pb-1">
                            <h2 class="text-2xl text-center sm:text-left font-bold text-gray-900 md:text-2xl px-4 sm:px-0">
                                RESTAURANT JOBA
                            </h2>
                            <p class="my-8 text-gray-600 px-4 sm:px-0">
                                Joba est un restaurant au 9 rue du premier mai, Bizerte connu avec sa délicieuse cuisine. Il réalise basiquement tout vos besoins de nourriture, en utilisant des fraîches ingrédients.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-4">
                <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div class="bg-gray-100 dark:lg:bg-darker lg:p-16 rounded-[1rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div class="md:7/12 lg:w-1/2 pt-4">
                            <img
                                src={eleone}
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                                className='w-64 md:w-72  mx-auto '
                            />
                        </div>
                        <div class="md:7/12 lg:w-1/2 pb-1">
                            <h2 class="text-2xl text-center sm:text-left font-bold text-gray-900 md:text-2xl px-4 sm:px-0">
                                ELEONETECH
                            </h2>
                            <p class="my-8 text-gray-600 px-4 sm:px-0">
                                Eleonetech, située à Bizerte à quelques kilomètres de Tunis, est née de la joint-venture entre One Tech Group et Elemaster. Eleonetech est une entreprise leader dans le domaine de l’assemblage électronique pour les secteurs de haute technologie tels que l’automobile et l’automatisation industrielle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div class="relative items-center w-full px-5  mx-auto md:px-12 lg:px-16 max-w-7xl">
                    <div class="max-w-xl mx-auto text-center lg:p-10">
                        <div>
                            <p class="max-w-xl mt-4 text-lg tracking-tight font-bold text-gray-600">
                                Do you want more information?
                            </p>
                        </div>
                        <div class="flex flex-col items-center justify-center gap-3 mt-5 lg:flex-row lg:justify-center">
                            <a class="inline-flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-gray-900 border-2 border-gray-900 rounded-full hover:bg-transparent hover:border-gray-900 hover:text-gray-900 focus:outline-none lg:w-auto"
                                href="./../../ds.pdf"
                                target='_blank'>
                                <span class="flex flex-col items-start ml-4 leading-none">
                                    <span class="mb-1 text-xs">Check out our</span>
                                    <span class="font-medium title-font">Sponsoring Folder</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
