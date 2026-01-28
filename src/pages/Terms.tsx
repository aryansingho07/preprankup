
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ShieldCheck, ScrollText } from "lucide-react"

export default function Terms() {
    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#5C5EE6]/10 text-[#5C5EE6] mb-8">
                        <ScrollText className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                        Terms of Use
                    </h1>
                    <p className="text-xl text-gray-500 font-medium">
                        Last revised January 2026
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="prose prose-lg prose-slate max-w-none text-gray-600 space-y-16">

                    {/* 1. Acceptance */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">1</span>
                            Acceptance of Terms
                        </h2>
                        <p className="leading-relaxed">
                            The following agreement outlines your obligations when using the PrepRankUp website available at https://www.preprankup.com/ or any other websites of PrepRankUp (collectively, "PrepRankUp"), (each a "Site"). The Site is owned and operated by PrepRankUp, and is accessed by you under the terms of use described below ("Terms of Use").
                        </p>
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                            <p className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-2">Important</p>
                            <p className="text-blue-800 font-medium">
                                PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE ACCESSING OR USING THE SITE OR ANY CONTENT ON THE SITE. BY ACCESSING THE SITE OR ANY CONTENT ON THE SITE, YOU AGREE TO BECOME BOUND BY THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO ALL THE TERMS AND CONDITIONS, THEN YOU MAY NOT ACCESS THE SITE OR USE THE CONTENT OR ANY SERVICES IN THE SITE. PREPRANKUP'S ACCEPTANCE IS EXPRESSLY CONDITIONED UPON YOUR ASSENT TO ALL OF THESE TERMS AND CONDITIONS, TO THE EXCLUSION OF ALL OTHER TERMS; IF THESE TERMS AND CONDITIONS ARE CONSIDERED AN OFFER BY PREPRANKUP, ACCEPTANCE IS EXPRESSLY LIMITED TO THESE TERMS.
                            </p>
                        </div>
                    </section>

                    {/* 2. Modifications */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">2</span>
                            Modifications of Terms of Use
                        </h2>
                        <p className="leading-relaxed">
                            PrepRankUp reserves the right, at its sole discretion, to modify or replace the Terms of Use at any time. If the alterations constitute a material change to the Terms of Use, PrepRankUp will notify you by posting an announcement on the Site. What constitutes a "material change" will be determined at PrepRankUp's sole discretion, in good faith and using common sense and reasonable judgment. You are responsible for reviewing and becoming familiar with any such modifications. Use of the Site by you following such notification constitutes your acceptance of the terms and conditions of the Terms of Use as modified.
                        </p>
                    </section>

                    {/* 3. Content Ownership */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">3</span>
                            Content Ownership and Usage Rights
                        </h2>
                        <p className="leading-relaxed">
                            PrepRankUp shall retain all worldwide rights in the intellectual property of the Site and any content on the Site, including, but not limited to, trademarks, the "look and feel" of the Site, its color combinations, layout, and all other graphical elements, and the copyright in and to its original content. You should assume that everything you read or see on the Site is copyrighted or otherwise protected and owned by PrepRankUp, or a third party who licensed the right to use such content to PrepRankUp.
                        </p>
                        <p className="leading-relaxed">
                            Unless otherwise expressly noted, nothing that you read or see on the Site or other site content, or any of the source code or HTML code that PrepRankUp uses to generate the Site may be copied, reproduced, modified, distributed, transmitted, republished, displayed, or performed for commercial use without the prior written consent of PrepRankUp, except as provided in the Terms of Use, without prior written consent or otherwise permitted by relevant law.
                        </p>
                    </section>

                    {/* 4. Use of Software */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">4</span>
                            Use of Software
                        </h2>
                        <p className="leading-relaxed">
                            To the extent that PrepRankUp provides for the download of PrepRankUp software from the Site and any information or documentation related thereto (collectively "Software"), such Software is protected by the applicable copyright, patent or other intellectual property rights of either PrepRankUp or the third-party licensor. Any use of the Software is subject to the terms of the applicable end-user or other license terms contained in the files for such Software.
                        </p>
                        <p className="leading-relaxed">
                            You are permitted to use the Software for your personal, non-commercial use or legitimate internal business purposes related to your role as a contractor of PrepRankUp, partner of PrepRankUp, or current or prospective customer of PrepRankUp. As between the parties, PrepRankUp solely shall own and hereby retains all rights, title and interest in and to the Software (including, without limitation, all patent, copyright, trademark, trade secret and other intellectual or industrial property rights embodied in the Software). You shall not reverse engineer or attempt to discover any source code or underlying ideas or algorithms of any Software (except to the extent that applicable law expressly prohibits such a reverse engineering restriction or to the extent the specific Software was provided in source code form by PrepRankUp).
                        </p>
                    </section>

                    {/* 5. Indemnity */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">5</span>
                            Indemnity
                        </h2>
                        <p className="leading-relaxed">
                            You will indemnify and hold harmless PrepRankUp, its parents, subsidiaries, affiliates, customers, vendors, officers and employees from any liability, damage or cost (including reasonable attorneys' fees and cost) from any claim or demand made by any third party due to or arising out of your access to or use of the Site or any content on the Site, violation of the Terms of Use by you, or the infringement by you of any intellectual property or other right of any person or entity.
                        </p>
                    </section>

                    {/* 6. Warranty Disclaimers */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">6</span>
                            Warranty Disclaimers
                        </h2>
                        <p className="leading-relaxed">
                            Diligent care has been taken in acquiring and providing the information included and posted on the Site. Nonetheless, PrepRankUp makes no guarantee or warranty, express or implied, as to the reliability, accuracy, timeliness or completeness of that information and assumes no responsibility for any errors or omissions therein.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-sm text-gray-600 space-y-4">
                            <p className="font-bold">USER ACCESSES THIS SITE AT HIS OR HER OWN RISK. THE SITE AND ALL CONTENT ON THE SITE IS PROVIDED ON AN "AS IS, AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND AND ANY AND ALL WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT ARE SPECIFICALLY DISCLAIMED.</p>
                            <p>NEITHER PREPRANKUP NOR ITS AFFILIATES, EMPLOYEES, AGENTS OR THIRD PARTY CONTENT PROVIDERS SHALL BE LIABLE FOR ANY LOSS RESULTING FROM USE OR UNAVAILABILITY OF INFORMATION OR CONTENT ON THIS SITE, INCLUDING BUT NOT LIMITED TO ANY LOST PROFITS, LOSS OR DAMAGE TO DATA, OR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, COMPENSATORY OR INCIDENTAL DAMAGES, EVEN IF THEY HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                            <p>THIS DISCLAIMER IS APPLICABLE TO ANY DAMAGE OR INJURY RESULTING FROM NEGLIGENCE OR OMISSION OF PREPRANKUP, COMPUTER VIRUS OR OTHER SIMILAR ITEM, TELECOMMUNICATIONS ERRORS, OR UNAUTHORIZED ACCESS TO OR USE OF USER INFORMATION THROUGH THEFT OR ANY OTHER MEANS. PREPRANKUP IS NOT LIABLE FOR CRIMINAL, TORTIOUS, OR NEGLIGENT ACTIONS OR OMISSIONS OF THIRD PARTIES THAT AFFECT THIS SITE.</p>
                            <p>IN NO EVENT WILL PREPRANKUP OR ANY OF ITS AFFILIATES, AGENTS, EMPLOYEES, ASSIGNS OR THIRD PARTY CONTENT PROVIDERS BE HELD LIABLE FOR ANY TORTIOUS OR ILLEGAL CONDUCT OF OTHER USERS. IN NO EVENT WILL PREPRANKUP OR ANY OF ITS AFFILIATES, AGENTS, EMPLOYEES OR ASSIGNS BE HELD LIABLE FOR ANY DAMAGE TO EQUIPMENT, HARDWARE OR OTHER PROPERTY OF USER OR PERSONAL INJURY THAT ARISES IN CONNECTION WITH USE OF THE SITE.</p>
                        </div>
                    </section>

                    {/* 7. Linking and Framing */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">7</span>
                            Linking and Framing
                        </h2>
                        <p className="leading-relaxed">
                            PrepRankUp does not object to links on third-party sites to the homepage of the Site in an appropriate context. However, "framing" or "mirroring" the Site or any of its content is prohibited without the prior written consent of PrepRankUp. The Site may provide links to other sites or resources available on the Internet. Links or other resources that may be accessed via this Site and any other third-party content are being provided as a convenience and for informational purposes only unless otherwise expressly noted.
                        </p>
                        <p className="leading-relaxed">
                            Because PrepRankUp has no control over such sites and resources, you acknowledge and agree that PrepRankUp is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any content, advertising, products, services or other materials on or available from such sites or resources, or of the organizations publishing such websites. You also acknowledge and agree that PrepRankUp is not responsible for the accuracy or legality of any such third-party sites or resources or the content that may be accessed via this website.
                        </p>
                    </section>

                    {/* 8. Trademarks */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">8</span>
                            Trademarks and Trade Names
                        </h2>
                        <p className="leading-relaxed">
                            The company name, graphics, logos, designs, page headers, button icons, scripts, and other product and service names are the trademarks and trade names of PrepRankUp. PrepRankUp's trademarks and trade names may not be used, including as part of trademarks and/or as part of domain names, in connection with any product or service in any manner that is likely to cause confusion.
                        </p>
                    </section>

                    {/* 9. Electronic Communications */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">9</span>
                            Electronic Communications
                        </h2>
                        <p className="leading-relaxed">
                            We use reasonable security measures and take reasonable system, process and administrative precautions to protect the security and integrity of email and other electronic communications that you may send to us. Despite all these precautions, no method of transmission over the Internet is entirely secure and we cannot guarantee the confidentiality or security of the electronic communications or its contents. You transmit such information at your own risk and you should decide very carefully which information you want to send us via any electronic communication.
                        </p>
                    </section>

                    {/* 10. Security */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">10</span>
                            Security
                        </h2>
                        <p className="leading-relaxed">
                            Users are prohibited from violating or attempting to violate the security of the site. PrepRankUp will investigate occurrences of possible violations and will cooperate with all applicable law enforcement authorities in prosecuting violators.
                        </p>
                    </section>

                    {/* 11. Governing Law (Adapted) */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-sm">11</span>
                            Governing Law
                        </h2>
                        <p className="leading-relaxed">
                            These Terms of Use shall be governed by and construed in accordance with the laws of India. You agree that any legal action or proceeding regarding the terms, conditions, and usage of the Site or Service shall be brought exclusively in the courts located in India.
                        </p>
                    </section>

                </div>
            </div>

            {/* Bottom CTA */}
            <div className="bg-graphite-900 py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-6">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-black text-white mb-4">Questions about our Terms?</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        If you have any questions or concerns regarding these terms, please contact our legal team.
                    </p>
                    <button className="px-8 py-3 bg-white text-graphite-900 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                        Contact Support
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    )
}
