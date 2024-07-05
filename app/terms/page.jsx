

const Terms = () => {
    return (
        <div className="flex flex-col mx-auto w-3/4 mt-8 items-center md:mt-24">
            <div>
                <h1 className="text-[18px] font-bolder md:text-[32px]">
                    Lucid Automation Terms and Conditions
                </h1>
                <p className="font-medium text-[10px] mt-4 text-[#C7C2CB] md:text-[16px]">
                    Last updated: July 4, 2024
                </p>

                <div className="flex flex-col space-y-12 mt-16">
                    <div>
                        <MainPoint text="1. These terms"/>
                        <SubPoint text="1.1 What these terms cover"/>
                        <Paragraph text="These are the terms and conditions on which we supply software products, subscription services, and digital content to you."/>
                        <SubPoint text="1.2 Why you should read them."/>
                        <Paragraph text="Please read these terms carefully before you submit your order to us. These terms tell you who we are, how we will provide software, subscription services, or digital content to you, how you and we may change or end the contract, what to do if there is a problem, and other important information."/>
                        <SubPoint text="1.3 Are you a business customer or a consumer?"/>
                        <ParagraphWithList 
                            text="You are a consumer if:" 
                            listItems={[
                                "You are an individual.",
                                "You are buying products from us wholly or mainly for your personal use (not for use in connection with your trade, business, craft, or profession)."
                            ]}
                        />
                    </div>
                    <div>
                        <MainPoint text="2. Information about us and how to contact us"/>
                        <SubPoint text="2.1 Who we are."/>
                        <Paragraph text="We are Lucid Automation Ltd, a company registered in England and Wales. Our company registration number is 12345678 and our registered office is at 123 Tech Street, London, England, SW1A 1AA. Our registered VAT number is 87654321."/>
                        <SubPoint text="2.2 How to contact us."/>
                        <Paragraph text="You can contact us by telephoning our customer service team at [your phone number] or by writing to us at support@lucid-automation.co.uk."/>
                        <SubPoint text="2.3 How we may contact you."/>
                        <Paragraph text="If we have to contact you, we will do so by telephone or by writing to you at the email address or postal address you provided to us in your order or other contact information you have provided to us."/>
                        <SubPoint text="2.4 'Writing' includes emails."/>
                        <Paragraph text="When we use the words 'writing' or 'written' in these terms, this includes emails."/>
                    </div>

                    <div>
                        <MainPoint text="3. Our contract with you"/>
                        <SubPoint text="3.1 How we will accept your order."/>
                        <Paragraph text="Our acceptance of your order will take place once payment has been made and an email regarding your order has been delivered, at which point a contract will come into existence between you and us."/>
                        <SubPoint text="3.2 If we cannot accept your order."/>
                        <Paragraph text="If we are unable to accept your order, we will inform you of this and will not charge you for the product. This might be because the product is awaiting an update, or out of stock, because of unexpected limits on our resources which we could not reasonably plan for, because we have identified an error in the price or description of the product, or because we are unable to meet a delivery deadline you have specified."/>
                        <SubPoint text="3.3 Your order number."/>
                        <Paragraph text="We will assign an order number to your order and tell you what it is when we accept your order. It will help us if you can tell us the order number whenever you contact us about your order. You will also receive a full receipt from Stripe upon purchasing a license key; please retain this receipt number as it will also help us to locate your purchase if you do need to contact us for any reason."/>
                    </div>

                    <div>
                        <MainPoint text="4. Our products"/>
                        <SubPoint text="4.1 Products may vary slightly from their pictures."/>
                        <Paragraph text="The images of the products on our website are for illustrative purposes only. Although we have made every effort to display the colours accurately, we cannot guarantee that a device's display of the colours accurately reflects the colour of the products. Your product may vary slightly from those images."/>
                        <SubPoint text="4.2 Product packaging may vary."/>
                        <Paragraph text="The packaging of any physical products you receive may vary from that shown in images on our website."/>
                    </div>

                    <div>
                        <MainPoint text="5. Your rights to make changes"/>
                        <Paragraph text="If you wish to make a change to the product you have ordered, please contact us. We will let you know if the change is possible. If it is possible, we will let you know about any changes to the price of the product, the timing of supply, or anything else which would be necessary as a result of your requested change and ask you to confirm whether you wish to go ahead with the change. Please note no changes can be made to any software purchases due to the nature of digital goods."/>
                    </div>

                    <div>
                        <MainPoint text="6. Our rights to make changes"/>
                        <SubPoint text="6.1 Minor changes to the products"/>
                        <ParagraphWithList 
                            text="We may change the product:" 
                            listItems={[
                                "to reflect changes in relevant laws and regulatory requirements;",
                                "to implement minor technical adjustments and improvements, for example to address a security threat. These changes should not affect your rights."
                            ]}
                        />

                        <SubPoint text="6.2 More significant changes to the subscription services and these terms."/>
                        <Paragraph text="In addition, we may make changes to these terms or the subscription services for upgrades, but if we do so during the course of your subscription service with us, we will notify you and you may then contact us to end the contract before the changes take effect."/>
                        <SubPoint text="6.3 Updates to digital content."/>
                        <Paragraph text="Apart from the subscription services for updates, we may also update or require you to update digital content, provided that the digital content shall always match the description of it that we provided to you before you bought it."/>
                    </div>

                    <div>
                        <MainPoint text="7. Providing the products"/>
                        <SubPoint text="7.1 Delivery costs."/>
                        <Paragraph text="The costs of delivery for products will be as displayed to you on our website."/>
                        <SubPoint text="7.2 When we will provide the products."/>
                        <Paragraph text="During the order process we will let you know when we will provide the products to you. If the products are ongoing services or subscriptions, we will also tell you during the order process when and how you can end the contract."/>
                        <SubPoint text="7.3 We are not responsible for delays outside our control."/>
                        <Paragraph text="If our supply of the products is delayed by an event outside our control, we will contact you as soon as possible to let you know and we will take steps to minimize the effect of the delay. Provided we do this, we will not be liable for delays caused by the event, but if there is a risk of substantial delay, you may contact us to end the contract and receive a refund for any products you have paid for but not received."/>
                        <SubPoint text="7.4 If you are not at home when the product is delivered."/>
                        <Paragraph text="If no one is available at your address to take delivery and the products cannot be posted through your letterbox, the courier company will leave details for redelivery and you should contact them to arrange this."/>
                        <SubPoint text="7.5 When you become responsible for the goods."/>
                        <Paragraph text="A product which is physical goods will be your responsibility from the time we deliver the product to the address you gave us. We are not liable for any delivery delays or issues which are the result of incorrect addresses or courier complications. Any digital goods become the responsibility of the customer once payment has been made and the license key has been delivered via email."/>
                        <SubPoint text="7.6 When you own goods."/>
                        <Paragraph text="You own a product which is goods once we have received payment in full."/>
                        <SubPoint text="7.7 What will happen if you do not give required information to us."/>
                        <Paragraph text="We may need certain information from you so that we can supply the products to you, for example, your address for goods, or for subscription services, your email address. If so, this will have been stated in the description of the products on our website. We will contact you to ask for this information."/>
                        <SubPoint text="7.8 Reasons we may suspend the supply of products to you"/>
                        <ParagraphWithList 
                            text="We may have to suspend the supply of a physical or digital product or subscription services, to:" 
                            listItems={[
                                "deal with technical problems or make minor technical changes;",
                                "update the product to reflect changes in relevant laws and regulatory requirements;",
                                "make changes to the product as requested by you or notified by us to you (see clause 6);",
                                "any malicious or illegal activity e.g., piracy, decompiling, attempts to scam etc.;",
                                "for any other reason we believe is fair and reasonable."
                            ]}
                        />

                        <SubPoint text="7.9 Your rights if we suspend the supply of products."/>
                        <Paragraph text="We will contact you in advance to tell you we will be suspending supply of the product or service, unless the problem is urgent or an emergency. If we have to suspend the product or service for longer than two weeks in any month period, we will adjust the price so that you do not pay for products while they are suspended."/>
                        <SubPoint text="7.10 We may also suspend supply of the products if you do not pay."/>
                        <Paragraph text="If you do not pay us for the products when you are supposed to (see clause 17.4) and you still do not make payment within 3 days of us reminding you that payment is due, we may suspend supply of the products until you have paid us the outstanding amounts. We will contact you to tell you we are suspending supply of the products. We will not suspend the products where you dispute the unpaid invoice (see clause 17.7). We will not charge you for the products during the period for which they are suspended. As well as suspending the products, we can also charge you interest on your overdue payments (see clause 17.6)."/>
                    </div>

                    <div>
                        <MainPoint text="8. Our Intellectual Property & Acceptable Use"/>
                        <SubPoint text="8.1 Content"/>
                        <Paragraph text="In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Site, including any such content uploaded by Users. All Content included on the Site, unless uploaded by Users, is the property of Lucid Automation or other relevant third parties. By continuing to use the Site you acknowledge that such Content is protected by copyright, trademarks, database rights and other intellectual property rights. Nothing on this site shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any trademark, logo or service mark displayed on the Site without the owner’s prior written permission. You may, for your own personal, non-commercial use only retrieve, display and view the Content on a computer screen. You must not otherwise reproduce, modify, copy, distribute or use for commercial purposes any Content without our written permission."/>
                    </div>

                    <div>
                        <MainPoint text="9. Ownership of Content"/>
                        <SubPoint text="9.1 Protected content"/>
                        <ParagraphWithList 
                            text="Our Site includes a combination of content that we and other third parties create. Most of the content available through the Site is trademarked or copyright protected. Some examples of protected content include:" 
                            listItems={[
                                "written content",
                                "interface design and layout",
                                "photographs",
                                "graphics",
                                "images",
                                "illustrations",
                                "logos",
                                "sound or video clips",
                                "software code",
                                "animation",
                                "trademarks belonging to or identifying the Site, its affiliates, and/or licensees."
                            ]}
                        />
                        <Paragraph text="You may not copy, imitate, or use any content from our Site in any way without our prior written permission or the permission of the respective owner. If you would like to request permission to use any of the content on the Site, please contact us."/>
                    </div>

                    <div>
                        <MainPoint text="10. Copyright Policy and Digital Millennium Copyright Act ('DMCA') Notice in the United States"/>
                        <SubPoint text="10.1 Copyright interests"/>
                        <Paragraph text="We respect the copyright interests of others and require our users to comply with these Terms of Service and all applicable laws regarding copyrights. If you believe that any content shown on or transmitted through the Site violates these Terms of Service or your copyright, please report the violation to the Site and provide the following information:"/>
                        <ParagraphWithList 
                            text="" 
                            listItems={[
                                "A description of the copyrighted work or other intellectual property that you claim has been infringed;",
                                "A description of where the material that you claim is infringing is located on the Site (including the exact URL);",
                                "An address, a telephone number, and an email address where we can contact you;",
                                "A statement that you have a good-faith belief that the use is not authorized by the copyright or other intellectual property rights owner, by its agent, or by law; and",
                                "A statement by you under penalty of perjury that the information in your notice is accurate and that you are the copyright or intellectual property owner or are authorized to act on the owner’s behalf."
                            ]}
                        />
                    </div>

                    <div>
                        <MainPoint text="11. Your rights to end the contract"/>
                        <SubPoint text="11.1 You can always end your contract with us."/>
                        <Paragraph text="Your rights when you end the contract will depend on what you have bought, whether there is anything wrong with it, how we are performing, when you decide to end the contract, and whether you are a consumer or business customer:"/>
                        <SubPoint text="11.2 Ending the contract because of something we have done or are going to do"/>
                        <ParagraphWithList 
                            text="If you are ending a contract for a reason set out at (a) to (e) below, the contract will end immediately, and we will refund you in full for any products which have not been provided and you may also be entitled to compensation. The reasons are:" 
                            listItems={[
                                "we have told you about an upcoming material change that affects the core functionality of or to the product or service or these terms which you do not agree to (see clause 6.2);",
                                "we have told you about an error in the price or description of the product you have ordered and you do not wish to proceed;",
                                "there is a risk that supply of the physical products may be significantly delayed because of events outside our control;",
                                "we have suspended supply of the products for technical reasons, or notify you we are going to suspend them for technical reasons, in each case for a period of more than two weeks; or",
                                "you have a legal right to end the contract because of something we have done wrong."
                            ]}
                        />

                        <SubPoint text="11.3 Exercising your right to change your mind if you are a consumer."/>
                        <Paragraph text="If you are a consumer then for most products/services bought online you have a legal right to change your mind within 14 days and receive a refund. These rights are explained in more detail in these terms."/>
                        <SubPoint text="11.4 When consumers do not have a right to change their minds."/>
                        <ParagraphWithList 
                            text="Your right as a consumer to change your mind does not apply in respect of:" 
                            listItems={[
                                "digital products after you have started to download or stream these even if the cancellation period is still running;",
                                "Subscription services, once these have been accessed, even if the cancellation period is still running;",
                                "products sealed for health protection or hygiene purposes, once these have been unsealed after you receive them;",
                                "sealed audio or sealed video recordings or sealed computer software, once these products are unsealed after you receive them;",
                                "any products which become mixed inseparably with other items after their delivery."
                            ]}
                        />
                        <SubPoint text="11.5 How long do consumers have to change their minds?"/>
                        <Paragraph text="If you are a consumer how long you have to change your mind depends on what you have ordered and how it is delivered."/>
                        <SubPoint text="11.6 Ending the contract where we are not at fault and there is no right to change your mind."/>
                        <Paragraph text="Even if we are not at fault and you are not a consumer who has a right to change their mind (see clause 11.1), you can still end the contract before it is completed. A contract for goods or digital content is completed when the product is delivered, downloaded, or streamed and paid for. A contract for services is completed when we have finished providing the services and you have paid for them. If you want to end the contract in these circumstances, just contact us to let us know. The contract will not end until the next calendar month regardless of when you contact us. For example, if you tell us you want to end the contract on 14 March, we will continue to supply the product until 31 March and no refunds for March will be due. Your service will cease on 1 April."/>
                    </div>

                    <div>
                        <MainPoint text="12. How to end the contract with us (including if you are a consumer who has changed their mind)"/>
                        <SubPoint text="12.1 Tell us you want to end the contract"/>
                        <ParagraphWithList 
                            text="To end the contract with us, please let us know by doing one of the following:" 
                            listItems={[
                                "Phone or email. Email us at support@lucid-automation.co.uk. Please provide your name, home address, details of the order and, where available, your phone number and email address."
                            ]}
                        />
                        <SubPoint text="12.2 Returning products."/>
                        <Paragraph text="If you decide to return products, you must contact us first at support@lucid-automation.co.uk to authorize a return. If you are a consumer exercising your right to change your mind, you must send off the goods within 14 days of telling us you have changed your mind. Any return which has been authorized will be subject to a restocking fee of £15 GBP. The customer must pay for their own return label. Shipping costs (either to or from ourselves) will not be refunded."/>
                        <SubPoint text="12.3 When we will pay the costs of return"/>
                        <ParagraphWithList 
                            text="We will pay the costs of return:" 
                            listItems={[
                                "if the products are faulty or misdescribed;",
                                "if you are ending the contract because we have told you of an upcoming change to the product or these terms, an error in pricing or description, a delay in delivery due to events outside our control, or because you have a legal right to do so as a result of something we have done wrong."
                            ]}
                            additionalText="In all other circumstances (including where you are a consumer exercising your right to change your mind) you must pay the costs of return."
                        />
                        <SubPoint text="12.4 What we charge for collection."/>
                        <Paragraph text="If you are responsible for the costs of return and we are collecting the product from you, we will charge you the direct cost to us of collection."/>
                        <SubPoint text="12.5 How we will refund you."/>
                        <Paragraph text="If you are entitled to a refund under these terms we will refund you the price you paid for the products including delivery costs, by the method you used for payment. Any returns for non-defective goods will not receive a refund for shipping costs and will be subject to a £15 GBP restocking fee."/>
                        <SubPoint text="12.6 When your refund will be made"/>
                        <ParagraphWithList 
                            text="We will make any refunds due to you as soon as possible. If you are a consumer exercising your right to change your mind then:" 
                            listItems={[
                                "If the products are goods, your refund will be made within 14 days from the day on which we receive the product back from you or, a different date if we agree that you do not need to return the product.",
                                "In all other cases, your refund will be made within 14 days of your telling us you have changed your mind."
                            ]}
                        />
                    </div>

                    <div>
                        <MainPoint text="13. Our rights to end the contract"/>
                        <SubPoint text="13.1 We may end the contract if you break it"/>
                        <ParagraphWithList 
                            text="We may end the contract at any time by writing to you if:" 
                            listItems={[
                                "you do not make any payment to us when it is due;",
                                "you do not, within a reasonable time of us asking for it, provide us with information that is necessary for us to provide the products, for example, email address, or;",
                                "you do not, within a reasonable time, allow us to deliver the products to you.",
                                "any malicious or illegal activity e.g., piracy, decompiling, attempts to scam etc.",
                                "for any other reason we believe is fair and reasonable."
                            ]}
                        />
                        <SubPoint text="13.2 You must compensate us if you break the contract."/>
                        <Paragraph text="If we end the contract in the situations set out in clause 13.1 we will refund any money you have paid in advance for products we have not provided but we may deduct or charge you reasonable compensation for the net costs we will incur as a result of your breaking the contract."/>
                        <SubPoint text="13.3 We may withdraw the product."/>
                        <Paragraph text="We may publish on our website a notice to let you know that we are going to stop providing the product. We will let you know at least 2 weeks in advance of our stopping the supply of the product and will refund any sums you have paid in advance for products which will not be provided."/>
                    </div>

                    <div>
                        <MainPoint text="14. If there is a problem with the product"/>
                        <Paragraph text="How to tell us about problems. If you have any questions or complaints about the product, please contact us via https://support.lucid-automation.co.uk. You can also write to us directly at support@lucid-automation.co.uk but the link provided will provide you with more direct and urgent support regarding our software."/>
                    </div>

                    <div>
                        <MainPoint text="15. Your rights in respect of defective products if you are a consumer"/>
                        <SubPoint text="15.1 Your rights"/>
                        <Paragraph text="If you are a consumer, we are under a legal duty to supply products that are in conformity with this contract. See the box below for a summary of your key legal rights in relation to the products in the UK. Nothing in these terms will affect your legal rights."/>
                        <Paragraph text="Summary of your key legal rights This is a summary of your key legal rights. These are subject to certain exceptions. For detailed information, please visit the Citizens Advice website www.adviceguide.org.uk or call 03454 04 05 06."/>
                        <ParagraphWithList 
                            text="If your product is goods, the Consumer Rights Act 2015 says goods must be as described, fit for purpose, and of satisfactory quality. During the expected lifespan of your product, your legal rights entitle you to the following:" 
                            listItems={[
                                "Up to 30 days: if your goods are faulty, then you can get an immediate refund. See also clause 11.3."
                            ]}
                        />
                        <ParagraphWithList 
                            text="If your product is digital content, the Consumer Rights Act 2015 says digital content must be as described, fit for purpose, and of satisfactory quality:" 
                            listItems={[
                                "If your digital content is faulty, you're entitled to a repair or a replacement.",
                                "If the fault can't be fixed, or if it hasn't been fixed within a reasonable time and without significant inconvenience, you can get some or all of your money back.",
                                "If you can show the fault has damaged your device and we haven't used reasonable care and skill, you may be entitled to a repair or compensation."
                            ]}
                            additionalText="See also clause 11.3."
                        />
                        <ParagraphWithList 
                            text="If your product is subscription services the Consumer Rights Act 2015 says:" 
                            listItems={[
                                "You can ask us to repeat or fix a service if it's not carried out with reasonable care and skill, or get some money back if we can't fix it."
                            ]}
                            additionalText="See also clause 11.2."
                        />
                    </div>

                    <div>
                        <MainPoint text="16. Your rights in respect of defective products if you are a business"/>
                        <SubPoint text="16.1 Your rights"/>
                        <ParagraphWithList 
                            text="If you are a business customer, we warrant that on delivery of any digital or physical products they shall:" 
                            listItems={[
                                "Conform in all material respects with their description and any relevant specification;",
                                "be free from material defects in design, material and workmanship; and",
                                "be fit for any purpose held out by us."
                            ]}
                        />
                        <SubPoint text="16.2 Subject to clause 16.3"/>
                        <ParagraphWithList 
                            text="If:" 
                            listItems={[
                                "you give us notice in writing within a reasonable time of discovery that a product does not comply with the warranty set out in clause 16.1;",
                                "we are given a reasonable opportunity of examining such product; and",
                                "you return such product to us at our cost,"
                            ]}
                            additionalText="we shall, at our option, repair or replace the defective product, or refund the price of the defective product in full."
                        />

                        <SubPoint text="16.3 We will not be liable"/>
                        <ParagraphWithList 
                            text="We will not be liable for a product's failure to comply with the warranty in clause 16.1 if:" 
                            listItems={[
                                "you make any further use of such product after giving a notice in accordance with clause 16.2(a);",
                                "the defect arises because you failed to follow our oral or written instructions as to the storage, installation, commissioning, use, or maintenance of the product or (if there are none) good trade practice;",
                                "the defect arises as a result of us following any drawing, design, or specification supplied by the Customer;",
                                "you alter or repair the product without our written consent; or",
                                "the defect arises as a result of fair wear and tear, wilful damage, or negligence."
                            ]}
                        />

                        <SubPoint text="16.4 These terms shall apply"/>
                        <Paragraph text="These terms shall apply to any replacement products supplied by us under clause 16.2."/>
                    </div>

                    <div>
                        <MainPoint text="17. Price and payment"/>
                        <SubPoint text="17.1 Where to find the price for the product."/>
                        <Paragraph text="The price of the product (which includes VAT where applicable) will be the price indicated on the order pages when you placed your order. We use our best efforts to ensure that the price of the product advised to you is correct. However, please see clause 17.3 for what happens if we discover an error in the price of the product you order."/>
                        <SubPoint text="17.2 We will pass on changes in the rate of VAT."/>
                        <Paragraph text="If the rate of VAT changes between your order date and the date we supply the product, we will adjust the rate of VAT that you pay, unless you have already paid for the product in full before the change in the rate of VAT takes effect."/>
                        <SubPoint text="17.3 What happens if we got the price wrong."/>
                        <Paragraph text="It is always possible that, despite our best efforts, some of the products we sell may be incorrectly priced. We will normally check prices before accepting your order so that, where the product's correct price at your order date is less than our stated price at your order date, we will charge the lower amount. If the product's correct price at your order date is higher than the price stated to you, we will contact you for your instructions before we accept your order."/>
                        <SubPoint text="17.4 When you must pay and how you must pay"/>
                        <ParagraphWithList 
                            text="We accept payment with Mastercard, Visa, Discover, and American Express. When you must pay depends on what product you are buying:" 
                            listItems={[
                                "For goods, you must pay for the products before we dispatch them. We will not charge your credit or debit card until we dispatch the products to you.",
                                "For digital content, you must pay for the products before you download them.",
                                "For subscription services, these occur on a month by month basis and you make an advance payment of 100% of the price of the services in a given month, before we start providing them. We will invoice you MONTHLY in advance for the services until you give notice to end the subscription. You must pay each invoice before the subscription service will become available to you."
                            ]}
                        />

                        <SubPoint text="17.5 Our right of set-off if you are a business customer."/>
                        <Paragraph text="If you are a business customer, you must pay all amounts due to us under these terms in full without any set-off, counterclaim, deduction, or withholding (other than any deduction or withholding of tax as required by law)."/>
                        <SubPoint text="17.6 We can charge interest if you pay late."/>
                        <Paragraph text="If you do not make any payment to us by the due date, we may charge interest to you on the overdue amount at the rate of [4]% a year above the base lending rate of England from time to time. This interest shall accrue on a daily basis from the due date until the date of actual payment of the overdue amount, whether before or after judgment. You must pay us interest together with any overdue amount."/>
                        <SubPoint text="17.7 What to do if you think an invoice is wrong."/>
                        <Paragraph text="If you think an invoice is wrong, please contact us promptly to let us know. You will not have to pay any interest until the dispute is resolved. Once the dispute is resolved, we will charge you interest on correctly invoiced sums from the original due date."/>
                    </div>

                    <div>
                        <MainPoint text="18. Our responsibility for loss or damage suffered by you if you are a consumer"/>
                        <SubPoint text="18.1 We are responsible to you for foreseeable loss and damage caused by us."/>
                        <Paragraph text="If we fail to comply with these terms, we are responsible for loss or damage you suffer that is a foreseeable result of our breaking this contract or our failing to use reasonable care and skill, but we are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen, for example, if you discussed it with us during the sales process."/>
                        <SubPoint text="18.2 We do not exclude or limit in any way our liability to you where it would be unlawful to do so."/>
                        <Paragraph text="This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors; for fraud or fraudulent misrepresentation; for breach of your legal rights in relation to the products as summarised at clause 15.1."/>
                        <SubPoint text="18.3 When we are liable for damage caused by defective digital content."/>
                        <Paragraph text="If defective digital content which we have supplied damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation. However, we will not be liable for damage which you could have avoided by following our advice to apply an update offered to you free of charge or for damage which was caused by you failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us."/>
                        <SubPoint text="18.4 We are not liable for business losses."/>
                        <Paragraph text="If you are a consumer, we only supply the products to you for domestic and private use. If you use the products for any commercial, business or re-sale purpose our liability to you will be limited as set out in clause 19."/>
                        <SubPoint text="18.5 Your sole remedy"/>
                        <Paragraph text="Your sole remedy for dissatisfaction with the site and/or site-related services is to stop using the site and/or those services."/>
                    </div>

                    <div>
                        <MainPoint text="19. Our responsibility for loss or damage suffered by you if you are a business"/>
                        <SubPoint text="19.1 Nothing in these terms shall limit or exclude our liability for:"/>
                        <ParagraphWithList 
                            text="" 
                            listItems={[
                                "death or personal injury caused by our negligence, or the negligence of our employees, agents or subcontractors (as applicable);",
                                "fraud or fraudulent misrepresentation; or",
                                "any matter in respect of which it would be unlawful for us to exclude or restrict liability."
                            ]}
                        />
                        <SubPoint text="19.2 Except to the extent expressly stated in clause 16.1"/>
                        <Paragraph text="All terms implied by sections 13 to 15 of the Sale of Goods Act 1979 and sections 3 to 5 of the Supply of Goods and Services Act 1982 are excluded."/>
                        <SubPoint text="19.3 Subject to clause 19.1"/>
                        <ParagraphWithList 
                            text="" 
                            listItems={[
                                "we shall not be liable to you, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, for any loss of profit, or any indirect or consequential loss arising under or in connection with any contract between us; and",
                                "our total liability to you for all other losses arising under or in connection with any contract between us, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall be limited to the total sums paid by you for products under such contract."
                            ]}
                        />
                    </div>

                    <div>
                        <MainPoint text="20. How we may use your personal information"/>
                        <SubPoint text="20.1 How we will use your personal information."/>
                        <Paragraph text="We will only use your personal information as set out in our Privacy Policy."/>
                    </div>

                    <div>
                        <MainPoint text="21. Other important terms"/>
                        <SubPoint text="21.1 We may transfer this agreement to someone else."/>
                        <Paragraph text="We may transfer our rights and obligations under these terms to another organisation."/>
                        <SubPoint text="21.2 You need our consent to transfer your rights to someone else."/>
                        <Paragraph text="You may only transfer your rights or your obligations under these terms to another person if we agree to this in writing."/>
                        <SubPoint text="21.3 Nobody else has any rights under this contract."/>
                        <Paragraph text="This contract is between you and us. No other person shall have any rights to enforce any of its terms."/>
                        <SubPoint text="21.4 If a court finds part of this contract illegal, the rest will continue in force."/>
                        <Paragraph text="Each of the paragraphs of these terms operates separately. If any court or relevant authority decides that any of them are unlawful, the remaining paragraphs will remain in full force and effect."/>
                        <SubPoint text="21.5 Even if we delay in enforcing this contract, we can still enforce it later."/>
                        <Paragraph text="If we do not insist immediately that you do anything you are required to do under these terms, or if we delay in taking steps against you in respect of your breaking this contract, that will not mean that you do not have to do those things and it will not prevent us taking steps against you at a later date. For example, if you miss a payment and we do not chase you but we continue to provide the products, we can still require you to make the payment at a later date."/>
                        <SubPoint text="21.6 Which laws apply to this contract and where you may bring legal proceedings if you are a consumer."/>
                        <Paragraph text="These terms are governed by English law and you can bring legal proceedings in respect of the products in the English courts. If you live in Scotland you can bring legal proceedings in respect of the products in either the Scottish or the English courts. If you live in Northern Ireland you can bring legal proceedings in respect of the products in either the Northern Irish or the English courts."/>
                        <SubPoint text="21.7 US Class Action Waiver"/>
                        <Paragraph text="You agree that you will resolve any disputes, claims, or controversies on an individual basis, and that claim(s), if any, brought under these Terms of Service in connection with the Site will be brought in an individual capacity, and not on behalf of, or as part of, any purported class, consolidated, or representative proceeding. You further agree that you shall not participate in any consolidated, class, or representative proceeding (existing or future) brought by any third party arising under these Terms of Service or in connection with the Site."/>
                        <SubPoint text="21.8 Which laws apply to this contract and where you may bring legal proceedings if you are a business."/>
                        <Paragraph text="If you are a business, any dispute or claim arising out of or in connection with a contract between us or its subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales and the courts of England and Wales shall have exclusive jurisdiction to settle any such dispute or claim."/>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

const MainPoint = ({text}) => {
    return (
        <h2 className="text-[16px] md:text-[24px]">
            {text}
        </h2>
    )
}

const SubPoint = ({text}) => {
    return (
        <h3 className="text-[13px] md:text-[16px] font-medium text-[#C7C2CB] mb-4 mt-8">
            {text}
        </h3>
    )
}

const Paragraph = ({text}) => {
    return (
        <p className="text-[11px] md:text-[14px] font-thin text-[#C7C2CB] mb-4">
            {text}
        </p>
    )
}

const ParagraphWithList  = ({text, listItems}) => {
    return (
        <div className="text-[11px] md:text-[14px] font-thin text-[#C7C2CB] mb-4">
            <p className="mb-4">
                {text}
            </p>
            <ul className="list-disc ml-6">
                {listItems.map((item,key) => (
                    <li key={key}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Terms;
