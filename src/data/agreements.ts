export interface AgreementData {
  title: string;
  updateDate: string;
  effectiveDate: string;
  contentHtml: string;
}

export const USER_AGREEMENT: Record<'zh' | 'en', AgreementData> = {
  zh: {
    title: 'Kirahub 用户协议',
    updateDate: '版本更新日期：2026年5月11日',
    effectiveDate: '版本生效日期：2026年5月11日',
    contentHtml: `
      <p>用户协议（以下简称“本协议”）由用户（以下简称“您”）与 SUNRISEAI PTE. LTD.（以下简称“公司”、“我们”或“服务提供商”）共同缔结，本协议具有法律约束力。建议您仔细阅读并充分理解所有条款，特别是免除或限制责任的条款，以及适用于特定服务激活或使用的任何单独协议和条款。除非您已阅读并接受本协议的所有条款，否则您不得使用本产品或服务。您对本产品或服务的使用即构成您对本协议的确认与接受。如果您是未成年人，请在法定监护人的监督下阅读本协议，并特别注意适用于未成年人的条款。</p>
      
      <h2><strong>重要提示</strong></h2>
      <p>通过使用我们提供的产品和服务，您确认您已完整阅读本协议，同意其条款，并同意遵守其规定。如果您不接受这些条款，请勿安装或使用本产品或相关服务。点击“接受”、“同意”或任何类似按钮，或注册、开始使用、继续使用本产品或服务，即表示您接受本协议的所有条款。在使用本产品及其相关服务之前，请仔细阅读本协议的所有条款。我们特别提醒您要彻底阅读每一项规定，特别是免除或限制公司责任的条款（通常包含“不承担责任”或“无义务”等词语）以及其他限制用户权利的条款（通常包含“不得”等词语）。这些规定应在您所在司法管辖区法律允许的最大范围内适用。在使用本产品和服务期间，您可以随时通过本协议中提供的联系信息向公司提交关于其使用的疑问、反馈或建议。我们非常乐意与您交流或为您解答疑问。</p>
      
      <h2><strong>1. 定义和说明</strong></h2>
      <p>在本协议中，除非另有说明，以下词语具有以下含义：</p>
      <ol>
        <li>本协议：指本协议正文、隐私政策及其相关修订版本。一经正式发布，上述内容即构成本协议不可分割的一部分。</li>
        <li>公司：指 <strong>SUNRISEAI PTE. LTD.</strong></li>
        <li>产品：指 kirahub 移动应用程序及其关联功能（以下简称“本 App”），作为兼容电子设备控制界面。它支持与设备进行蓝牙连接，并允许用户将选择或编辑的图像、视频、GIF、弹幕文本等内容发送到设备进行显示。这包括但不限于适用于 Android、iOS 和其他移动智能设备的所有兼容版本产品，以及相关更新、升级和补丁。在作为软件提供时，还包括相应的软件和文档。</li>
        <li>用户：也称“最终用户”，指通过公司提供的合法渠道获得使用产品许可，并进行安装和使用的任何自然人或法人。</li>
        <li>账号：也称“用户账号”，指用户为使用本产品或服务，按照本协议及相关法律政策成功注册的账号。当前版本不提供自建账号系统，不需要登录，也不绑定手机号或第三方账号。</li>
        <li>服务：向用户提供的各种产品相关服务，包括蓝牙设备连接、素材选择与编辑、内容传输至电子设备，以及本地数据保存等其他配套控制服务。</li>
        <li>用户数据：指用户在使用产品期间产生的各种类型的数据。当前版本不存储云端用户数据；昵称、头像、素材副本、编辑参数和发布历史主要存储在您的设备本地。</li>
      </ol>
      
      <h2><strong>2. 账号安全与协议内容修改</strong></h2>
      <ol>
        <li>当前版本无需账号注册或登录：该应用版本不需要注册账号、登录、绑定手机号、或关联第三方账号。您可以直接安装并打开，使用核心功能。</li>
        <li>您在应用中设置的昵称和头像为随机生成或手动编辑。它们仅在本地应用内显示，不代表真实身份验证，不用于服务器认证。请确保您的昵称和头像不侵犯他人的合法权益，不包含非法、侵权、骚扰、仇恨言论、色情、暴力、欺诈或其他不当内容。</li>
        <li>如果我们检测到用户账号的异常活动，我们可能会暂停或终止用户对服务的访问。如果用户违反适用法律、法规或本协议条款，我们可能会暂停或终止用户对我们服务的访问以及相关账号权限。</li>
        <li>我们保留随时修改、暂停或终止我们产品或服务（全部或部分）或修改这些条款的权利，恕不另行通知。如果我们修改了这些条款，我们将发布修订后的条款或以其他方式通知您。继续访问或使用我们的外设和产品即表示您同意受修改后条款的约束。如果您无法接受修订后的条款，我们建议您停止使用这些产品和服务。</li>
      </ol>
      
      <h2><strong>3. 内容政策和行为指引</strong></h2>
      <ol>
        <li>您特此保证并承诺，对于通过我们的服务上传、发布、公开展示或以其他方式提供的任何材料，包括但不限于图像、视频、GIF、弹幕评论、昵称、头像和其他内容（统称为“内容”），您拥有所有权利。您理解并同意，您不得使用本产品或服务创建、复制、发布或传播任何干扰公司正常运营、违反法律法规、或侵犯其他用户或第三方合法权益的内容。</li>
        <li>您理解并同意，您在使用本产品时的言行必须遵守适用法律法规、和公司的内容政策，不得从事任何非法、不当的活动。</li>
        <li>设备连接与蓝牙使用规范
          <ul>
            <li>本应用通过蓝牙与电子跳字设备进行通信。请确保设备已连接，并根据系统提示授予必要的蓝牙权限。</li>
            <li>您应当仅连接并控制由您拥有、被授权使用、或有权管理的电子跳字设备。不得尝试扫描、连接、干扰、破解或控制未授权的设备。</li>
            <li>蓝牙连接可能受距离、障碍物、系统设置、设备电量、环境干扰及固件版本等多种因素影响。我们无法保证在所有条件下连接都是不间断或无延迟的。</li>
          </ul>
        </li>
        <li>您不得对本服务下的软件及其开发平台进行反向工程、反编译、反汇编，或进行任何其他提取源代码或参数的尝试。您也被禁止使用自动脚本、外部插件、破解工具或任何其他未授权方式来使用本应用程序。</li>
        <li>您理解并同意，您关于本产品的行为必须符合适用法律、法规和公司的内容政策，并且您不得进行任何非法或不当活动，包括但不限于：
          <ol>
            <li>反对宪法确定的基本原则；</li>
            <li>危害国家安全、泄露国家秘密、颠覆国家政权、破坏国家统一；</li>
            <li>损害国家荣誉和利益；</li>
            <li>歪曲、丑化、亵渎、否定英雄烈士事迹和精神，或通过侮辱、诽谤等方式侵犯其姓名、肖像、名誉或荣誉；</li>
            <li>宣扬恐怖主义、极端主义，或煽动实施恐怖主义、极端主义活动；</li>
            <li>煽动民族、地区仇恨或歧视，破坏民族团结；</li>
            <li>宣扬邪教或封建迷信，违反国家宗教政策；</li>
            <li>散布谣言、虚假信息或引起政治争议，扰乱经济和社会秩序；</li>
            <li>传播淫秽、色情、赌博、毒品、暴力、血腥、谋杀、恐怖或者教唆犯罪；</li>
            <li>传播低俗、恶心、侵害儿童权益、或危害自身、他人身心健康的内容，从而破坏公共秩序和道德标准；</li>
            <li>侮辱或者诽谤他人，侵害他人名誉、隐私、肖像或者其他合法权益；</li>
            <li>涉及欺诈、伤害、胁迫、骚扰、侵权、诽谤、低俗、淫秽或任何其他在道德上令人反感的内容；</li>
            <li>生成、制作或传播垃圾邮件、垃圾短信或其他垃圾信息；或协助欺骗、欺诈活动（包括剽窃、学术不端）、欺诈、钓鱼攻击或创建恶意软件。</li>
            <li>试图绕过或规避安全过滤器，或故意操纵模型做出违反我们政策的行为；</li>
            <li>可能对个人产生不公平或不利影响的言行；</li>
            <li>使用严重偏离实际内容的夸张标题；</li>
            <li>捏造谣言、丑闻或不端行为；</li>
            <li>对自然灾害、重大事故或其他灾难进行不当评论；</li>
            <li>包含性暗示、性暗示挑逗、或其他容易引起性联想的元素；</li>
            <li>表现恐怖、残酷或其他引起生理或心理不适的元素；</li>
            <li>宣扬、煽动基于群体、宗教、国籍、性别、年龄、职业、健康状况等的歧视；</li>
            <li>推介低俗、庸俗、迎合的内容；</li>
            <li>可能引导未成年人模仿不安全行为或违反社会公德，或诱导未成年人养成不健康习惯的内容；</li>
            <li>其他对网络生态产生不利影响的内容；</li>
            <li>包含您国家司法管辖区适用法律、法规、规章、条例或任何具有法律约束力的规范所限制或禁止的其他内容。</li>
          </ol>
        </li>
        <li>您应对您在使用本应用时的所有行为（包括您编辑、传输或显示的内容，以及由此产生的任何后果）独立承担全部责任。如您的内容或使用导致第三方提出投诉、索赔、争议、处罚或损失，您应承担全部责任；如果这些行为导致我们遭受损失，您应在适用法律允许的范围内进行赔偿。</li>
      </ol>
      
      <h2><strong>4. 付费服务</strong></h2>
      <ol>
        <li>当前版本：免费使用且与硬件绑定，不包含付费下载、应用内内购、订阅、充值、购买或订单相关的付费功能。</li>
        <li>若本 App 随后提供付费下载、内购、订阅、增值服务或硬件相关的付费服务，具体的定价、权益、续订、取消和退款政策将在应用内界面、应用商店页面或购买流程中进行展示。</li>
        <li>对于通过 Apple App Store 或 Google Play 购买的商品，付款、税费、退款和争议解决通常受各应用商店政策约束。</li>
      </ol>
      
      <h2><strong>5. 知识产权与许可</strong></h2>
      <ol>
        <li>您理解并承诺，您在使用公司产品和服务时上传、编辑或提交的所有内容，均为您的原创或已获得合法授权，不侵犯任何第三方的知识产权。您依法保留对用户生成内容的所有权和知识产权。</li>
        <li>本应用（包括其相关软件、界面、图标、文案、设计、商标、品牌、技术、代码、文档和其他材料）的知识产权均属于我们或相关权利人。未经我们或相关权利人事先书面许可，您不得复制、 修改、翻译、改编、出租、出售、转让、公开传播、对本应用的任何部分进行反向工程、反编译、反汇编或以其他方式进行使用，除非适用法律明文允许。</li>
        <li>您特此确认并同意，为及时、高效地保护本服务下用户的合法权益，如您的合法权益（包括但不限于版权和商标等知识产权）可能受到侵害并进一步损害公司利益，您特此特别授权公司—独立或委托专业第三方机构—针对涉嫌侵权人采取法律行动。这些法律措施可以包括但不限于：侵权监控、发送警告信、行政投诉、请求公安机关介入、提起诉讼、申请仲裁、调解和签署和解协议。</li>
        <li>关于 kirahub、产品标识、品牌材料及相关名称的权利属于 STAR CLUSTER PTE. LTD.。</li>
      </ol>
      
      <h2><strong>6. 投诉反馈</strong></h2>
      <p>我们非常尊重知识产权。若权利人发现他人侵犯其合法权益，可通过发送邮件至 <a href="mailto:service@seame.ai">service@seame.ai</a> 提起投诉，邮件主题注明“权利通知”，并提交法律规定的所有必要证明文件。我们将依照法律程序进行处理。</p>
      
      <h2><strong>7. 第三方产品与服务</strong></h2>
      <ol>
        <li>本应用可能通过 Apple App Store、Google Play 或其他应用商店进行分发。当您通过这些应用商店进行下载、安装、更新、付款或申请退款等操作时，您还必须遵守其各自的服务条款和规则。</li>
        <li>第三方服务由相应第三方提供和管理。除法律强制规定外，我们对该等第三方服务的可用性、内容、 数据处理或安全措施不作任何承诺或保证。</li>
      </ol>
      
      <h2><strong>8. 隐私政策</strong></h2>
      <p>尊重用户隐私是我们公司的基本义务。请参阅我们同时发布的隐私政策。当前版本的核心信息默认保存在您的设备本地，不上传至我们的服务器。</p>
      
      <h2><strong>9. 免责声明</strong></h2>
      <ol>
        <li>在适用法律允许的最大范围内，本应用程序按“现状”和“可用”状态提供。我们不保证应用程序将不间断、无差错、完全安全、完全兼容所有设备或满足您的所有期望。</li>
        <li>由于网络服务提供产品或相关设备的维护、升级等需要，可能会导致合理时间段内服务的暂时中断，我们对该等情况不承担责任，但我们会尽量提前进行通知。</li>
        <li>本产品和服务可能会由于任何原因随时进行修改或移除特定功能。我们可能会随时取消或终止服务，而无需说明理由或提前通知。服务一旦取消或终止，用户使用该服务的权利理解终止，保存在服务内的任何信息可能无法恢复。</li>
        <li>您理解并同意，以下情况可能会影响本应用的使用，我们除法律强制性规定外不承担赔偿责任：
          <ol>
            <li>手机系统限制、权限未开启、蓝牙关闭或连接不稳定；</li>
            <li>电子外设设备故障、电量变低、存储空间不足或固件版本不匹配；</li>
            <li>素材格式、分辨率、时长、大小或编码超出设备支持限制；</li>
            <li>第三方服务、应用商店、操作系统或网络环境发生变化；</li>
            <li>您自行删除应用、清除数据、卸载应用、重置设备或误操作；</li>
            <li>本应用不适用于医疗、安全、救援、工业控制等高风险用途。请勿在可能导致人身伤害、重大财产损失或严重安全隐患的场景中使用本应用；</li>
            <li>由上述原因导致的利润损失、商业信誉损失、数据丢失或其他有形、无形损失，公司不承担任何直接或间接的赔偿。</li>
          </ol>
        </li>
      </ol>
      
      <h2><strong>10. 未成年人使用条款</strong></h2>
      <ol>
        <li>若您是未成年人，您应在法定监护人的监督、指导下仔细阅读并同意本协议，并在取得监护人同意后方可使用本产品及相关服务。</li>
        <li>未成年人及其监护人特此理解并确认，若您违反法律法规或本协议条款，您和您的监护人应依法承担由此产生的一切法律责任。</li>
      </ol>
      
      <h2><strong>11. 法律适用与管辖</strong></h2>
      <ol>
        <li>本协议的生效、履行、解释、修订、补充、终止及争议解决均适用公司注册登记地法律。</li>
        <li>若本协议的任何条款被判定为无效、被终止或不可执行，该条款应被视为本协议的可分割条款，不影响其余条款的有效性和可执行性。</li>
        <li>除非公司作出书面声明，否则公司在任何情况下的不作为均不应被解释为对权利的放弃。</li>
        <li>因履行本协议、隐私政策或其他公司政策或规则产生的任何争议，双方应首先进行友好协商。协商不成的，任何一方均可向公司注册登记地法院提起诉讼。</li>
      </ol>
      
      <h2><strong>12. 联系我们</strong></h2>
      <p>如果您对本产品或服务的使用有任何疑问，或对本协议条款有任何意见/建议，请联系客户服务电子邮件：<a href="mailto:service@seame.ai">service@seame.ai</a>。</p>
    `
  },
  en: {
    title: 'Kirahub User Agreement',
    updateDate: 'Version update date: May 11, 2026',
    effectiveDate: 'Version effective date: May 11, 2026',
    contentHtml: `
      <p>The User Agreement (hereinafter referred to as "this Agreement") is entered into jointly by the User (hereinafter referred to as "You") and SUNRISEAI PTE. LTD. (hereinafter referred to as "the Company", "we", or "the Service Provider"), and this Agreement is legally binding. You are advised to carefully read and fully understand all terms and conditions, particularly those regarding liability exemption or limitation, as well as any separate agreements or terms governing the activation or use of specific services. You may not use this Product or Service unless you have read and accepted all terms of this Agreement. Your use of this Product or Service constitutes your acknowledgment and acceptance of this Agreement. If you are a minor, please read this Agreement under the supervision of your legal guardian, with particular attention to the terms applicable to minors.</p>
      
      <h2><strong>Important Notes</strong></h2>
      <p>By using the products and services provided by us, you acknowledge that you have read this Agreement in full, agree to its terms, and consent to comply with its provisions. If you do not accept these terms, please do not install or use this product or related services. By clicking "Accept," "Agree," or any similar buttons, or by registering, beginning to use, or continuing to use this product or service, you hereby accept all terms of this Agreement. Before using this product and its related services, please carefully review all terms of this Agreement. We specifically remind you to thoroughly read every provision, particularly those exempting or limiting the Company's liability (which typically contain phrases such as "no liability" or "no obligation") and other clauses restricting user rights (which usually include terms like "shall not"). These provisions shall apply to the fullest extent permitted by the laws in your jurisdiction. During your use of this product and service, you may at any time submit questions, feedback, or suggestions regarding its use to the company via the contact information provided in this agreement. We are pleased to communicate with you or provide answers to your inquiries.</p>
      
      <h2><strong>1. Definition and Description</strong></h2>
      <p>In this Agreement, unless otherwise specified, the following terms have the following meanings:</p>
      <ol>
        <li>This Agreement refers to the main text of this Agreement, the Privacy Policy, and its relevant revised versions. Once officially published, the aforementioned content shall constitute an integral part of this Agreement.</li>
        <li>Company: Refers to <strong>SUNRISEAI PTE. LTD.</strong></li>
        <li>Product: Refers to the kirahub mobile application and its associated features (hereinafter referred to as "this App"), serving as the control interface for compatible electronic bar-jump devices. It enables Bluetooth connectivity with devices and allows users to send selected or edited images, videos, GIFs, bullet-screen text, and other content to the device for display. This includes, but is not limited to, all compatible versions of the product for Android, iOS, and other mobile smart devices, as well as related updates, upgrades, and patches. When provided as software, it also encompasses the corresponding software and documentation.</li>
        <li>User: Also known as the "end user," this refers to any natural person or legal entity that obtains permission to use the product through legitimate channels provided by the company and subsequently installs and utilizes it.</li>
        <li>Account: Also known as a "user account," it refers to an account successfully registered by a user to use this product or service in accordance with this agreement and relevant laws and policies. The current version does not provide a self-built account system, does not require login, and does not bind mobile numbers or third-party accounts.</li>
        <li>Services: Various product-related services provided to users, including Bluetooth device connection, material selection and editing, content transmission to electronic devices, and local data saving among other supporting control services.</li>
        <li>User data: Refers to various types of data generated by users during product usage. The current version does not store cloud-based user data; nicknames, profile pictures, material copies, editing parameters, and distribution history are primarily stored locally on your device.</li>
      </ol>
      
      <h2><strong>2. Account Security and Modification of Agreement Content</strong></h2>
      <ol>
        <li>The current version requires no account registration or login: This app version does not require registering an account, logging in, binding a phone number, or linking to third-party accounts. You can install and open it directly to use core features.</li>
        <li>The nickname and profile picture you set in this app are randomly generated or manually edited. They are displayed locally within the app only, do not represent real identity verification, and are not used for server authentication. Ensure your nickname and profile picture do not infringe on others' legal rights or contain illegal, infringing, harassing, hate speech, pornographic, violent, fraudulent, or other inappropriate content.</li>
        <li>If we detect abnormal activity in a user account, we may suspend or terminate the user's access to our services. If a user violates applicable laws, regulations, or the terms of this agreement, we may suspend or terminate the user's access to our services and related account permissions.</li>
        <li>We reserve the right to modify, suspend, or terminate our products or services (in whole or in part) or to amend these terms at any time without prior notice. If we amend these terms, we will publish the revised terms or notify you otherwise. By continuing to access or use our products and services, you agree to be bound by the amended terms. If you cannot accept the revised terms, we recommend discontinuing use of these products and services.</li>
      </ol>
      
      <h2><strong>3. Content Policy and Conduct Guidelines</strong></h2>
      <ol>
        <li>You hereby warrant and commit that you hold all rights to upload, publish, publicly display, or otherwise provide through our services any materials—including but not limited to images, videos, GIFs, bullet-screen comments, nicknames, avatars, and other content (collectively referred to as "Content"). You understand and agree that you shall not use this product or service to create, reproduce, publish, or disseminate any content that disrupts the company's normal operations, violates laws and regulations, or infringes upon the legitimate rights and interests of other users or third parties.</li>
        <li>You understand and agree that your words and actions regarding this product must comply with applicable laws, regulations, and the company's content policies, and you shall not engage in any illegal or improper activities.</li>
        <li>Device Connection and Bluetooth Usage Specifications
          <ul>
            <li>This application communicates with the electronic device via Bluetooth. Ensure the device is connected and grant the necessary Bluetooth permissions as prompted by the system.</li>
            <li>You should only connect to and control electronic bar-jump devices that you own, are authorized to use, or have the right to manage. Do not attempt to scan, connect, interfere with, crack, or control unauthorized devices.</li>
            <li>Bluetooth connections may be affected by factors such as distance, obstruction, system settings, device battery level, ambient interference, and firmware version. We cannot guarantee uninterrupted or latency-free connections under all conditions.</li>
          </ul>
        </li>
        <li>You must not perform reverse engineering, decompilation, disassembly, or any other attempt to extract the source code or parameters of the software and its development platform under this service. You are also prohibited from using automated scripts, external plugins, cracking tools, or any other unauthorized methods to utilize this application.</li>
        <li>You understand and agree that your conduct regarding this product must comply with applicable laws, regulations, and the company's content policies, and you must not engage in any illegal or improper activities, including but not limited to:
          <ol>
            <li>Opposing the fundamental principles established by the Constitution;</li>
            <li>Endangering national safety, disclosing state secrets, subverting state power, or undermining national unity;</li>
            <li>Damaging the national honor and interests;</li>
            <li>Distorting, defaming, desecrating, or denying the deeds and spirit of heroes and martyrs; or infringing upon their names, portraits, reputation, or honors through insult, slander, or other means;</li>
            <li>Promoting terrorism or extremism, or inciting the commission of terrorist or extremist activities;</li>
            <li>Inciting ethnic or regional hatred and discrimination, or undermining ethnic unity;</li>
            <li>Violating the state's religious policies by promoting cults or feudal superstitions;</li>
            <li>Spreading rumors, false information, or political disputes that disrupt economic and social order;</li>
            <li>Disseminating obscenity, pornography, gambling, drugs, violence, bloodshed, murder, terrorism, or incitement to crime;</li>
            <li>Disseminating vulgar, disgusting, child-oriented content, or material that endangers one's own or others' physical and mental health, thereby undermining public order and moral standards;</li>
            <li>Insulting or defaming others, thereby infringing upon their reputation, privacy, portrait, or other legitimate rights and interests;</li>
            <li>Content involving fraud, harm, coercion, harassment, infringement, defamation, vulgarity, obscenity, or any other morally objectionable material;</li>
            <li>Generating, producing, or disseminating spam emails, spam text messages, or other junk information; or assisting in deceptive or fraudulent activities (including plagiarism, academic misconduct), fraud, phishing attacks, or the creation of malware.</li>
            <li>Attempting to bypass or circumvent security filters, or intentionally manipulating the model to act in violation of our policies;</li>
            <li>May have unfair or adverse effects on individuals;</li>
            <li>Using exaggerated headlines that are seriously inconsistent with the actual content;</li>
            <li>Fabricating rumors, scandals, or misconduct;</li>
            <li>Inappropriate commentary on natural disasters, major accidents, or other calamities;</li>
            <li>Containing sexual implications, sexual provocation, or other elements that may readily evoke sexual associations;</li>
            <li>Content that exhibits horror, cruelty, or other elements causing physical or psychological distress;</li>
            <li>Promoting or inciting discrimination based on crowd, religion, nationality, gender, age, occupation, health status, etc.;</li>
            <li>Promoting vulgar, tasteless, or pandering content;</li>
            <li>Those that may lead minors to imitate unsafe behaviors or violate social ethics, or induce unhealthy habits in minors;</li>
            <li>Other content that adversely affects the online ecosystem;</li>
            <li>Contains any other content restricted or prohibited by the laws, regulations, rules, ordinances, or any legally binding norms applicable within the jurisdiction of your country.</li>
          </ol>
        </li>
        <li>You shall be solely responsible for all actions taken regarding this application, including any content you edit, transmit, or display, and any consequences arising therefrom. Should your content or usage lead to complaints, claims, disputes, penalties, or losses against third parties, you shall bear full responsibility; if such actions result in losses to us, you shall compensate within the limits permitted by applicable law.</li>
      </ol>
      
      <h2><strong>4. Paid Services</strong></h2>
      <ol>
        <li>Current version: Free to use and hardware-bound, with no paid downloads, in-app purchases, subscriptions, top-ups, purchases, or order-related features.</li>
        <li>If this app subsequently offers paid downloads, in-app purchases, subscriptions, value-added services, or hardware-related paid services, the specific pricing, benefits, renewal, cancellation, and refund policies will be displayed on the app in-app page, app store page, or purchase process.</li>
        <li>For items purchased through the Apple App Store or Google Play, payments, taxes, refunds, and dispute resolution are generally governed by the respective app store policies.</li>
      </ol>
      
      <h2><strong>5. Intellectual Property and Licensing</strong></h2>
      <ol>
        <li>You understand and undertake that all content you upload, edit, or submit when using the Company's products and services is either your original creation or legally authorized, and does not infringe upon any third-party intellectual property rights. You retain full ownership and intellectual property rights over user-generated content in accordance with the law.</li>
        <li>The intellectual property rights to this application, including its related software, interfaces, icons, copywriting, design, trademarks, brands, technologies, code, documentation, and other materials, belong to us or the relevant rights holders. Without prior written permission from us or the relevant rights holders, you may not copy, modify, translate, adapt, lease, sell, transfer, publicly disseminate, reverse-engineer, decompile, disassemble, or otherwise use any part of this application, except as expressly permitted by applicable law.</li>
        <li>You hereby confirm and agree that, in order to promptly and effectively protect the legitimate rights and interests of users under this service, you hereby specifically authorize the Company to take legal action against suspected infringers—either independently or by entrusting a professional third-party institution—in cases where your legitimate rights and interests (including but not limited to intellectual property rights such as copyrights and trademarks) may be infringed upon and further harm the Company's interests. Such legal measures may include, but are not limited to: infringement monitoring, issuance of warning letters, administrative complaints, requests for public security authorities to intervene, initiation of litigation, arbitration applications, mediation, and settlement agreements.</li>
        <li>The rights to kirahub, product identification, brand materials, and related names belong to STAR CLUSTER PTE. LTD.</li>
      </ol>
      
      <h2><strong>6. Complaint</strong></h2>
      <p>We respect intellectual property rights. If a rights holder discovers that others have infringed upon their legitimate rights, they may file a complaint via <a href="mailto:service@seame.ai">service@seame.ai</a> with the email subject line "Rights Notice" and submit all required documentation as mandated by law. We will handle such cases in accordance with legal procedures.</p>
      
      <h2><strong>7. Third-party products and services</strong></h2>
      <ol>
        <li>This app may be distributed through the Apple App Store, Google Play, or other app stores. When using features such as downloading, installing, updating, paying, or requesting refunds through these app stores, you must also comply with their respective service terms and rules.</li>
        <li>Third-party services are provided and managed by the respective third parties. We make no commitments beyond legal requirements regarding the availability, content, data processing, or security measures of these third-party services.</li>
      </ol>
      
      <h2><strong>8. Privacy Policy</strong></h2>
      <p>Respecting user privacy is a fundamental obligation of our company. Please refer to our concurrently published Privacy Policy. The core information of the current version is stored locally on your device by default and is not uploaded to our internal servers.</p>
      
      <h2><strong>9. Disclaimer</strong></h2>
      <ol>
        <li>To the greatest extent permitted by applicable law, this application is provided as "as-is" and "available." We do not guarantee that the application will be uninterrupted, error-free, completely secure, fully compatible with all devices, or meet all your expectations.</li>
        <li>Please note that this product and service require regular or ad hoc maintenance of the network service-providing products or related equipment. Should such maintenance result in interruptions to paid network services within a reasonable timeframe, we shall not be held liable; however, we will provide prior notice whenever possible.</li>
        <li>This product and service may be modified or have certain features removed at any time for any reason. The service may be canceled or terminated at any time without requiring justification or prior notice to the user. Upon cancellation or termination, the user's rights to use the service cease immediately, and any information stored within the service may become irrecoverable.</li>
        <li>You understand and agree that the following circumstances may affect the use of this application, and we shall not be liable beyond legal requirements:
          <ol>
            <li>System restrictions on the phone, disabled permissions, Bluetooth turned off, or unstable connection;</li>
            <li>Electronic device malfunction, low battery level, insufficient storage space, or incompatible firmware version;</li>
            <li>The material format, resolution, duration, size, or encoding exceeds the device's support limits.</li>
            <li>Changes occur in third-party services, app stores, operating systems, or network environments;</li>
            <li>You deleted the app yourself, cleared data, uninstalled the app, reset the device, or performed an accidental operation.</li>
            <li>This application is not intended for medical, safety, rescue, industrial control, or other high-risk uses. Do not use this application in scenarios that may cause personal injury, significant property damage, or serious safety risks.</li>
            <li>The Company shall not be liable for any direct or indirect compensation for losses in profits, business reputation, data, or other tangible or intangible losses arising from the aforementioned causes.</li>
          </ol>
        </li>
      </ol>
      
      <h2><strong>10. Terms of Use for Minors</strong></h2>
      <ol>
        <li>If you are a minor, you may use this product and related services only after carefully reading and agreeing to this agreement under the supervision and guidance of your guardian, and with the guardian's consent.</li>
        <li>Minors and their guardians hereby understand and confirm that if you violate any laws, regulations, or the terms of this agreement, you and your guardians shall bear all legal liabilities arising therefrom in accordance with applicable laws.</li>
      </ol>
      
      <h2><strong>11. Application of Law and Jurisdiction</strong></h2>
      <ol>
        <li>The execution and implementation of this Agreement (including its effectiveness, performance, interpretation, amendment and supplementation, termination, and dispute resolution) shall be governed by the laws of the company's registered domicile.</li>
        <li>If any provision of this Agreement is terminated, deemed terminated, invalid, or unenforceable, such provision shall be treated as a separable clause of this Agreement without affecting the validity and enforceability of the remaining provisions.</li>
        <li>Unless the Company makes a written statement, no action taken by the Company under any circumstances shall be construed as a waiver of rights.</li>
        <li>Any dispute arising from the performance of this Agreement, the Privacy Policy, or other company policies or rules shall first be resolved through friendly negotiations between you and the Company. If no resolution is reached within 60 days, either party may file a lawsuit with the court at the Company's registered domicile.</li>
      </ol>
      
      <h2><strong>12. Contact us</strong></h2>
      <p>If you have any questions regarding the use of this product or service, or any comments/suggestions about the terms of this agreement, please contact customer service at <a href="mailto:service@seame.ai">service@seame.ai</a>.</p>
    `
  }
};

export const PRIVACY_POLICY: Record<'zh' | 'en', AgreementData> = {
  zh: {
    title: '隐私政策',
    updateDate: '版本更新日期：2026年5月11日',
    effectiveDate: '版本生效日期：2026年5月11日',
    contentHtml: `
      <p>本隐私政策（以下简称“本隐私政策”）构成了《用户协议》（以下简称“用户协议”）不可分割的一部分，由用户（以下简称“您”）同 SUNRISEAI PTE. LTD.（以下简称“我们”）共同缔结。</p>
      
      <h2><strong>1. 政策适用范围领域</strong></h2>
      <p>kirahub 移动客户端应用（以下简称“本应用” / “本客户端”）是一款专为<strong>电子跳字设备外设（以下简称“外设” / “设备”）</strong>设计的控制界面。用户可以通过 App 的蓝牙功能与外设连接，在 App 中选择、编辑图片、视频、GIF、弹幕等内容，并一键分发到本应用关联的外设屏幕上进行呈现。</p>
      <p>我们绝对尊重用户的隐私和信息，将为您的隐私与数据提供最严格的保障。当您使用我们的产品及服务时，我们可能会收集和使用您的相关信息。本隐私政策旨在向您说明在收集和使用用户个人信息时的处理规则及相关事宜，以更好地保障您的权益。</p>
      
      <h2><strong>2. 我们如何收集和使用个人信息</strong></h2>
      <p>我们遵守法律法规，本着公平、合法、必要的原则，收集和使用您在服务过程中主动提供的，或因产品和/或服务需要而产生的个人信息。以下将对具体收集使用场景进行阐述，对于未在本隐私政策中明确的其他目的，我们将另行通知并征得您的同意。</p>
      
      <h3><strong>2.1 账号注册</strong></h3>
      <p>当前版本的应用不包含自建账号系统，无需您进行账号注册或登录，不绑定您的手机号或第三方账号。您设置的昵称、头像、素材及编辑参数等均默认保存在本地设备中。</p>
      
      <h3><strong>2.2 在使用本产品及服务期间</strong></h3>
      <ol>
        <li>本地数据处理信息：您设置的昵称、头像、语言偏好、基本设置、本地生成的用户标识或设备标识。
          <ul>
            <li><strong>目的：</strong>用于展示“我的”页面，进行语言切换，保存您的使用习惯和配置。</li>
            <li><strong>存储：</strong>该等信息保存在您手持设备的本地，不作任何云端服务器备份。</li>
          </ul>
        </li>
        <li>内容编辑与制作信息：您从相册、相机或本地文件选择的图像、短视频及 GIF 文件；在应用内对素材进行的剪裁、调速、旋转等参数调节历史；您手动输入准备分发的弹幕文字内容，包含设置的字号、底色、展示时长；分发素材的历史记录等。
          <ul>
            <li><strong>目的：</strong>用于在应用内置沙盒中预览和制作适应外设分辨率效果的显示文件，并通过蓝牙网络分发传输给与之连接的外设进行投幕。</li>
            <li><strong>存储：</strong>该等多媒体及剪辑文件纯粹保存在您本地及分发传输至外设，目前版本不在我们的任何自建服务器中上传或沉淀。</li>
          </ul>
        </li>
        <li>设备与蓝牙信息处理：您设备的蓝牙权限授予状态，蓝牙扫描到的附近可检测设备的名字、信号强度（RSSI）、服务 UUID、产品标识；已连接的电子跳字设备的名字、连接状态、设备电量及可能存在的固件版本和容量状态信息；蓝牙连接、断开及分发成功/失败的基本本地记录。
          <ul>
            <li><strong>目的：</strong>用于精准发现、匹配、绑定和授权您的外设跳字设备，在 App 端提供精确的设备电量与连接状态状态显示，并作为蓝牙通信的基础支持。</li>
            <li><strong>存储：</strong>同样仅保存于您本地；同时，蓝牙扫描动作完全由您系统自带的底层（Android/iOS）管理控制、向您征询。</li>
          </ul>
        </li>
        <li>储存权限的使用说明：本应用将申请索取您的系统媒体相册及储存文件的读取、写入权限。
          <ul>
            <li><strong>目的：</strong>用于您从您的设备中提取用于制作电子立绘的图片、GIF、短视频，并保障剪裁缓存能正常本地生存及传输使用。</li>
          </ul>
        </li>
        <li>日志与交互信息：鉴于当前版本没有社交、在线互动、消费推广、音视频即时通话等业务，本应用<strong>不采集任何系统崩溃数据、不采集统计追踪指标、不对接任何不必要的第三方风险控制日志 SDK。</strong></li>
      </ol>
      
      <h3><strong>2.3 意见反馈与客户服务信息</strong></h3>
      <ol>
        <li>当您通过邮箱、应用商店评论反馈或我们的特定客服路径联系我们时，您可能主动留下您填写的电子邮箱、姓名/代号、反馈问题类型及问题截图、日志报告、设备系统版本。
          <ul>
            <li><strong>目的：</strong>答复和排查您反映的外设连接以及软件崩溃故障，提升使用体验。</li>
            <li><strong>存储：</strong>本反馈信息将记录在我们的客服处理邮件中，非特殊情况不会与其他任何模块数据库关联或向任何第三方披露。</li>
          </ul>
        </li>
      </ol>
      
      <h3><strong>2.4 征得授权同意的例外情形</strong></h3>
      <p>根据相关法律法规，在以下情形中，我们收集、使用您的相关个人信息无需征求您的授权同意：</p>
      <ol>
        <li>与履行法律法规规定的义务相关的：包括因监管审查、国家机关强制执法、行政命令或法定义务直接相关的；</li>
        <li>与国家安全、国防安全直接相关的；</li>
        <li>与公共安全、公共卫生、重大公共利益直接相关的；</li>
        <li>与刑事侦查、起诉、审判和判决执行等直接相关的；</li>
        <li>出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人授权同意的；</li>
        <li>您自行向社会公众公开的个人信息；</li>
        <li>从合法公开披露的信息中收集的内容，如合法的报导、政府信息公开等；</li>
        <li>根据您要求签订和履行合同所必需的：为您发货、开票，或应您的要求履行特定合同行为；</li>
        <li>用于维护所提供的产品与服务的安全稳定运行所必需的，如发现和处置系统的故障；</li>
        <li>法律法规规定的其他情形。</li>
      </ol>
      
      <h2><strong>3. 我们如何共享、转让和公开披露您的个人信息</strong></h2>
      <h3><strong>3.1 共享</strong></h3>
      <p>除非取得您的明示、单独同意，否则我们不会与任何公司、组织或个人共享您的个人信息。即使存在必要的第三方 SDK 分发渠道，我们也会通过最小化原则加以控制和隔离。我们绝对保留对您本地多媒体（相册图片、视频）的完全保密，不对外上传和倒卖您的个人数据和历史记录。</p>
      
      <h3><strong>3.2 转让</strong></h3>
      <p>在合并、收购、资产转让或破产清算等类似法律行为中，如涉及到信息转让，我们将以公告、推送等形式通知您，并要求接收方严格履行本政策下的个人数据同等保护责任，否则需再次征求您的明示授权。</p>
      
      <h3><strong>3.3 公开披露</strong></h3>
      <p>除非法律、法规、司法程序明文强制要求，或获得您的明示单独同意外，我们不会对外公开披露您的任何个人数据。</p>
      
      <h2><strong>4. 我们如何存储和保护您的个人信息</strong></h2>
      <h3><strong>4.1 信息存储</strong></h3>
      <ol>
        <li><strong>存储地域：</strong>我们依照国际和当地法律，凡是在开展业务中收集、处理的客户个人信息，将严格独立安全地存储于注册所在地的高规格信息机房。应用本地多媒体文件保存在手持移动沙盒中，不会主动迁移或在跨国线路中由于我们云服务的设计而流转。</li>
        <li><strong>存储期限：</strong>数据保持期限限定在最小合理期间内。本地所有数据在您手动清除应用储存空间、卸载客户端软件、或做系统重置时均会随之彻底从您的设备中清除，该操作将导致已生成的数据不复存在且不可挽回。</li>
      </ol>
      
      <h3><strong>4.2 保护措施</strong></h3>
      <p>我们实施多重物理安全防御、管理流程优化和技术限制策略，极尽所能避免您本地的 sandbox 数据被其他恶意插件偷窥。如我们一旦检测到可能的信息安全风险泄露事件，将按照相关法律法规向您以及监管当局进行汇报并处置。</p>
      
      <h2><strong>5. 应用权限使用情况表</strong></h2>
      <table>
        <thead>
          <tr>
            <th>权限名称</th>
            <th>触发场景</th>
            <th>是否为核心必要</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>蓝牙权限 / Nearby Devices 权限</td>
            <td>扫描蓝牙列表、发起设备连接建立、大文件传输交互等。</td>
            <td>是（若不开启，本 App 将完全无法控制或分发内容至您的物理外设）</td>
          </tr>
          <tr>
            <td>系统相册 / 存储读取</td>
            <td>进入“上传素材”页面时，选择您想传输到设备的图片、GIF、短视频。</td>
            <td>是（若不开启，您将只能预览我们的样例内容而无法分发您个人自定义的内容）</td>
          </tr>
          <tr>
            <td>相机权限</td>
            <td>您也可以通过快门拍照、录像，将其处理为立绘或者壁纸显示到设备。</td>
            <td>否（若不开启，该拍照做图的功能无法使用，但不影响开启已有相册）</td>
          </tr>
        </tbody>
      </table>
      
      <h2><strong>6. 您的个人数据权利</strong></h2>
      <p>您对您的数据拥有自主撤回偏好、修正、彻底擦除的权利。由于本应用完全本地化，您可以通过以下方式自助行使这些权利：</p>
      <ol>
        <li>随时打开智能手机系统的“应用设置” -> “应用权限”，撤回本 App 处的系统相册、相机或蓝牙等授权；</li>
        <li>在应用内部随时重置自定义昵称及头像、删除之前制作的数据历史记录。一旦卸载应用，所有本地缓存在该应用路径下的数据都将销毁并不可找回。</li>
        <li>如果您在使用中有关于我们此协议的困惑、或想进行个人隐私权主张，请随时通过邮箱 service@seame.ai 联络。</li>
      </ol>
      
      <h2><strong>7. 未成年人及儿童的保护</strong></h2>
      <p>如果您属于国家法律认定的未成年人阶段，您必须同您的监护人（长辈 / 家长）一同审阅。若未成年人决定连接、采购并体验我们产品生态服务，原则上需要由其法定监护人对此完成同意批准举动。本应用不会刻意追逐儿童人群，也不利用儿童的额外个人资料去实现盈利动作。</p>
      
      <h2><strong>8. 本隐私政策的修改升级</strong></h2>
      <p>由于市场变更、相关法规更新规范、亦或是应用硬件平台的升级迭代更新，我们保留随时对此政策文件作出局部或者重大修改调整的契机。该些大修补或新政条款将在我们官方分发页面或最新一期应用升级弹出或更新中通知您通过继续停留并启动客户端代表您知悉并认同我们最新隐私规则。</p>
      
      <h2><strong>9. 联络我们</strong></h2>
      <p>如果您有任何问题或疑惑，请发信邮件至：<a href="mailto:service@seame.ai">service@seame.ai</a>，我们将于15个工作日内完成您身份确认的核定和详细妥善答复。感谢支持！</p>
    `
  },
  en: {
    title: 'Privacy Policy',
    updateDate: 'Version update date: May 11, 2026',
    effectiveDate: 'Version effective date: May 11, 2026',
    contentHtml: `
      <p>This Privacy Policy (hereinafter referred to as "this Privacy Policy") constitutes an integral part of the User Agreement (hereinafter referred to as "the User Agreement") and is jointly entered into by the User (hereinafter also referred to as "You") and SUNRISEAI PTE. LTD. (hereinafter referred to as "We").</p>
      
      <h2><strong>1. Scope of Policy Application</strong></h2>
      <p>The kirahub mobile application (hereinafter referred to as the "Application") is a dedicated control interface designed for <strong>electronic jukebox devices (hereinafter referred to as the "Device").</strong> Users can connect to the device via the App's Bluetooth functionality, select or edit images, videos, GIFs, bullet-screen text, and other content within the App, then send the edited content to the Device for display.</p>
      <p>We absolutely respect users' privacy and information, and will provide strict protection for your privacy and data. When you use our products and services, we may collect and utilize your personal information. This Privacy Policy outlines the processing rules and related matters regarding the collection and use of your personal information, aiming to better safeguard your rights and interests.</p>
      
      <h2><strong>2. How We Collect and Use Personal Information</strong></h2>
      <p>We collect and use your personal information—whether provided voluntarily during service use or generated as required by products and/or services—in compliance with laws and regulations, adhering to the principles of fairness, legality, and necessity. For any other purposes not specified in this Privacy Policy, we will provide separate notification and obtain your consent.</p>
      
      <h3><strong>2.1 Account Registration</strong></h3>
      <p>The current version of the application does not provide a self-built account system, does not require login, and does not bind phone numbers or third-party accounts. Information such as nicknames, avatars, materials, editing parameters, and release history is saved locally on the user's device by default.</p>
      
      <h3><strong>2.2 During the use of this product and service</strong></h3>
      <ol>
        <li>Local data processing information: nickname, avatar, language preference, app settings, locally generated presentation ID or device identifier. Purpose: Used to display the "My" page, switch languages, save preferences, and provide basic experience within this app. Storage location: This information is stored locally on your device by default.</li>
        <li>Content creation and editing information: images, videos, and GIFs selected from albums, cameras, or files; editing parameters such as cropping, scaling, panning, rotating, and fragment extraction; user-input bullet-screen text, font size, color, background color, and display duration; content sent to the electronic device and related records. Purpose: For local preview, editing, and generation of content suitable for device display, then sending it via Bluetooth to the connected electronic device. Storage location: By default, content is stored locally on your device or transmitted via Bluetooth to connected devices. The current version does not upload this content to our internal servers.</li>
        <li>Device and Bluetooth Information Processing: Bluetooth permission status; names, signal strength, device identifiers, or service UUIDs of nearby detectable devices; names, connection status, firmware or capability information (where applicable) of connected electronic devices; local records of connections, disconnections, and successful/failed transmissions. Purpose: For discovering, connecting to, and controlling electronic devices, displaying connection status, and diagnosing connection or transmission issues. Storage location: By default stored locally on your device; specific Bluetooth permissions and scanning behaviors are managed by operating systems such as iOS and Android.</li>
        <li>Obtain storage permissions for the device's external storage to access albums, files, images, videos, GIFs, and other media, ensuring proper operation of content selection and editing functions.</li>
        <li>Log information: The current version has no account system, login, purchases, promotions, or chat functionality. It does not collect any logs, statistics, tracking data, crash reports, risk control data, or security identification data.</li>
        <li>Interactive Information: This version has no user interactions, no chats, no voice features, no microphone permissions, and no content moderation. No interactive data is collected.</li>
        <li>Device information: The current version only stores locally the device name, device identifier, signal strength, connection status returned by Bluetooth scanning, and a randomly generated local installation identifier.</li>
      </ol>
      
      <h3><strong>2.3 Feedback and Customer Service Information</strong></h3>
      <ol>
        <li>If you contact us via email, external forms, app store reviews, or customer service channels, you may provide information such as your name/alias, email address, issue description, screenshots, logs, and device/system/app version.</li>
        <li>Purpose: Respond to questions, handle complaints, identify faults, improve products, and fulfill legal obligations.</li>
        <li>Storage: Depends on the feedback channels and customer service tools.</li>
      </ol>
      
      <h3><strong>2.4 Situations Where Authorization or Consent Is Not Required</strong></h3>
      <p>In accordance with relevant laws, regulations, and national standards, the collection and use of your personal information may occur without obtaining your authorization or consent under the following circumstances:</p>
      <ol>
        <li>Related to fulfilling obligations stipulated by laws and regulations;</li>
        <li>It is directly related to national interests such as national security and defense security;</li>
        <li>Directly related to major public interests such as public safety, public health, and public information access;</li>
        <li>Directly related to criminal investigation, prosecution, trial, and the enforcement of judgments;</li>
        <li>To protect your or another person's significant legitimate rights and interests when obtaining consent from the individual is difficult;</li>
        <li>Personal information you have publicly disclosed to the general public;</li>
        <li>Collected from legally disclosed public information;</li>
        <li>Essential for the signing and performance of the contract;</li>
        <li>Essential for maintaining the safe and stable operation of products or services;</li>
        <li>It is essential to conduct lawful news reporting;</li>
        <li>Statistical or academic research conducted for the public interest is essential, and the results must be anonymized.</li>
        <li>Other circumstances stipulated by laws and regulations.</li>
      </ol>
      
      <h2><strong>3. How we share, transfer, and publicly disclose your personal information</strong></h2>
      <h3><strong>3.1 Sharing</strong></h3>
      <p>It is generally not shared with any company, organization, or individual, except in the following cases:</p>
      <ol>
        <li>Obtain your explicit authorization or consent in advance;</li>
        <li>In accordance with laws and regulations, legal procedures, government orders, or judicial rulings;</li>
        <li>It is essential to protect the interests, property, and safety of companies, users, or the public;</li>
        <li>Share information as necessary among affiliated companies, and such sharing shall be subject to this policy.</li>
        <li>Share only the necessary information required for authorized partners to provide services, and require partners to comply with confidentiality obligations.</li>
      </ol>
      <p>The current version does not upload your images, videos, GIFs, bullet comments, nicknames, avatars, or posting history to its self-built servers, nor does it sell your personal information.</p>
      
      <h3><strong>3.2 Transfer</strong></h3>
      <p>Personal information is generally not transferred, except in the following cases:</p>
      <ol>
        <li>Obtain your explicit consent;</li>
        <li>In accordance with laws and regulations, legal procedures, and administrative or judicial enforcement requirements;</li>
        <li>In transactions such as mergers, acquisitions, asset transfers, and bankruptcy liquidations, transfers shall comply with legal requirements, and the new entity remains subject to this policy.</li>
      </ol>
      
      <h3><strong>3.3 Public Disclosure</strong></h3>
      <p>disclosure shall be made only under the following circumstances:</p>
      <ol>
        <li>Obtain your explicit consent;</li>
        <li>Laws, legal procedures, litigation, or mandatory requirements imposed by government authorities.</li>
      </ol>
      
      <h3><strong>3.4 Situations Where Prior Consent Is Not Required</strong></h3>
      <p>In cases where national security, public interest, criminal investigation, voluntary information disclosure, or acquisition through legally authorized channels are required as stipulated by laws, regulations, and national standards, prior authorization or consent is not necessary.</p>
      
      <h2><strong>4. How We Store and Protect Your Personal Information</strong></h2>
      <h3><strong>4.1 Information Storage</strong></h3>
      <ol>
        <li><strong>Storage location:</strong> In accordance with laws and regulations, personal information is stored solely within the registered headquarters country. The core data and content of the current version are stored locally on devices by default and are not uploaded to self-built servers. When using third-party services, information may be transmitted across borders.</li>
        <li><strong>Storage period:</strong> Data is retained for the shortest duration required to achieve the processing purpose. After the period expires, the data is deleted or anonymized. Local information remains until you delete it, clear the data, uninstall the application, or the system performs automatic cleanup.</li>
        <li>After uninstalling the application, clearing data, resetting the system, or deleting local records, the local information may be deleted and cannot be recovered.</li>
      </ol>
      
      <h3><strong>4.2 Information Protection</strong></h3>
      <ol>
        <li>Implement appropriate technical and managerial measures to protect information security, such as permission controls, local sandbox storage, data minimization, access restrictions, and service provider vetting.</li>
        <li>No internet transmission, electronic storage, or Bluetooth communication can guarantee absolute security. You must properly safeguard your phone, devices, and system permissions.</li>
        <li>Personal identification information shall not be disclosed to third parties without authorization, except as required by laws, regulations, judicial or administrative authorities, or to protect legitimate rights and interests.</li>
      </ol>
      
      <h2><strong>5. Application Permission Description</strong></h2>
      <p>This application may request the following system permissions. The names of permissions may vary depending on the system version and device:</p>
      <table>
        <thead>
          <tr>
            <th>Permission Name</th>
            <th>Purpose / Trigger Reason</th>
            <th>Is it required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bluetooth / Nearby Devices</td>
            <td>Scan, connect, and control the physical badge device.</td>
            <td>Yes (Required when connecting the device)</td>
          </tr>
          <tr>
            <td>Album / Photo / Storage</td>
            <td>Select images, videos, or GIFs as content or profile pictures from internal space.</td>
            <td>Yes (Required when using content selection features)</td>
          </tr>
          <tr>
            <td>Camera</td>
            <td>Take Photos and Videos as dynamic backgrounds on the badge frame.</td>
            <td>No (Required only when using photo capturing features)</td>
          </tr>
        </tbody>
      </table>
      
      <p>You can manage permissions in System Settings. Disabling a permission may make the corresponding feature unavailable.</p>
      
      <h2><strong>6. Your right to manage your personal information</strong></h2>
      <ol>
        <li>Information Inquiry: You can check your account and personal information on the product page. For other details, contact customer service.</li>
        <li>Correction information: You can manually update your profile picture, nickname, and other details. Other information can be corrected after identity verification.</li>
        <li>Delete information: You may request the deletion of your personal information under circumstances such as legal violations, unauthorized access, breach of agreements, account cancellation, or service termination.</li>
        <li>Revoke permissions: You can revoke permissions for albums, cameras, Bluetooth, and other features at any time in system settings. Revocation does not affect previously granted permissions.</li>
        <li>Account cancellation: You can apply for account cancellation through the product's internal path. After cancellation, the account becomes unusable, with all benefits cleared, data deleted, or anonymized, unless otherwise specified by laws and regulations.</li>
        <li>You can manage local information through in-app features, system settings, data deletion, or app uninstallation; or submit privacy requests such as access, correction, or deletion via the customer service email.</li>
      </ol>
      
      <h2><strong>7. Privacy of Children and Minors</strong></h2>
      <ol>
        <li>If you are a legally recognized minor in your jurisdiction, you must read this Privacy Policy accompanied by your guardian. Both you and your guardian should carefully review all terms and conditions, and only use our products and services after obtaining your guardian's full consent to this Privacy Policy.</li>
        <li>This application is not intended for children and does not intentionally collect children's personal information. If the collection of children's information is discovered without parental consent, the data will be deleted promptly in accordance with the law.</li>
        <li>Guardians are encouraged to guide minors in using the service; for minors under 14 years of age, the use requires parental consent and shall only occur when permitted by law, with explicit parental consent, or when necessary for the protection of the minor / disclosure of information.</li>
        <li>If the guardian refuses this service, we will legally delete the relevant information and terminate the service.</li>
      </ol>
      
      <h2><strong>8. Data Retention</strong></h2>
      <ol>
        <li>Local data and distribution history are typically retained on your device until you delete them, clear app data, uninstall the app, or perform a system cleanup.</li>
        <li>We retain information for the period necessary to achieve the processing objectives, unless required or permitted by law to retain it for a longer period.</li>
      </ol>
      
      <h2><strong>9. Cross-border transmission</strong></h2>
      <ol>
        <li>The core data and content of the current version are saved locally on the device by default and are not uploaded to the self-built server.</li>
        <li>When using services such as email feedback, external forms, app stores, or third-party analytics, information may be transmitted overseas for processing. Subsequent cross-border transmissions will be notified separately and require your consent.</li>
      </ol>
      
      <h2><strong>10. Suspension and Termination of Service</strong></h2>
      <ol>
        <li>We reserve the right to immediately terminate services for users who publish illegal information, seriously violate social ethics, or breach legally prohibited provisions.</li>
        <li>If a user engages in improper conduct, we reserve the right to terminate the service.</li>
      </ol>
      
      <h2><strong>11. Instructions for the startup scenario service</strong></h2>
      <p>To ensure proper reception of broadcast messages when the application is closed or running in the background, this application features a self-start function that periodically triggers the self-start process via system broadcasts—a necessary measure for delivering required functionalities and services.</p>
      
      <h2><strong>12. Update of this Policy</strong></h2>
      <ol>
        <li>This policy may be updated based on product features, laws and regulations, app store rules, or business changes. Significant changes will be notified through in-app notifications, store update descriptions, or the official website.</li>
        <li>The updated policy takes effect from the date of publication or notification. By continuing to use the application, you acknowledge and agree to the updated policy.</li>
        <li>Major changes encompass significant alterations in service models, ownership structures, information-sharing partners, user rights, contact details, and security risks.</li>
      </ol>
      
      <h2><strong>13. Contact Us</strong></h2>
      <p>For questions, inquiries, or complaints regarding this policy or personal information protection, please contact us through the following channels:</p>
      <p>Customer service email: <a href="mailto:service@seame.ai">service@seame.ai</a></p>
      <p>We will respond within 15 working days after verifying your identity; this period may be extended under special circumstances. Responses may not be available in cases involving national security, public safety, criminal investigations, or trade secrets.</p>
      
      <h2><strong>14. Third-party SDK and Service List</strong></h2>
      <p>The current version does not integrate third-party SDKs for statistics, advertising, crash analysis, push notifications, payments, or customer service. When downloading, updating, or reviewing apps through the Apple App Store or Google Play, the respective app stores handle the information according to their policies.</p>
    `
  }
};
