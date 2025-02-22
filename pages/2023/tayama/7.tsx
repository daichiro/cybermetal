import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'tayama'} pageCount={7}>
      <Image href={'/2023/tayama/tayama4.png'} widthPercentage={95}
             description={'左図：プリズムレンズの眼鏡 右図：近視プリズムレンズ（左）と近視レンズ（右）'}/>
      <p>眼鏡で十分矯正できるので、これでいったん治療は終了と相成りました。万が一もっと悪化するようなことがあれば、そのときは手術になるそうです。根本治療できれば嬉しいのですが、手術か眼鏡かと言われると眼鏡のほうが安牌だよねというのは納得のいくところです。しかし、半年間4つの診療科にわたって検査漬けだった日々が、まさか眼鏡一発で終わるとは......！</p>
      <p>結局、根本的な原因は分からずじまいでした。こういった原因不明の複視は最近増えているそうです。ゲームを長時間する人に多いということですが、筆者はそうでもありません（日がな一日PCの前にはいますが）。寝る前に眼鏡を外し、至近距離でスマホを視ることが多いことが原因なのではと思いましたが（その癖がついた頃に複視が悪化したような気がするので）、近くで視ることはむしろ眼を休める方向に働くとドクターは言います。</p>
      <p>ググってみると、複視の原因についての記事がいくつかヒットします[^3][^4]
        。これらのうち、脳腫瘍や脳梗塞などはMRIで除外しました。眼球運動の物理的阻害も除外済みです。ボツリヌス症やギラン=バレー症候群などは全身性の症状がないことから除外できそうです。重症筋無力症には全身型と眼筋型があり、後者はありえそうですが、眼瞼下垂（がんけんかすい：まぶたに力が入らず垂れ下がること）がないこと、血液中のアセチルコリン受容体抗体に異常がないことは不自然です。また仮に重症筋無力症だったとして、その治療は副作用の強い投薬になるようです。であれば眼鏡の矯正で済ませようという話になってきますし、重症筋無力症としての治療を行うつもりが最初からないのであれば、重症筋無力症かどうかに興味を持つ意義もありません。</p>
      <p>何にせよ眼鏡を新調するだけで済んだので安いものですが、一つだけプリズムレンズによってできなくなったことがありました。コンタクトレンズです。プリズムレンズというのは左右の視差を解消するために光を屈折させて眼に叩き込むものなので、レンズと眼の間に一定の距離が必要です。コンタクトレンズではその距離が確保できず、同じ理由でレーシックなどの視力回復手術も受けられません。正確に言えば受けられるのですが、コンタクトレンズやレーシックで近視を治しても、それとは別に複視を治すための眼鏡を掛ける必要があります。筆者は眼鏡派なので、これはあまり気になりませんでした。</p>
    </Pagination>
  )
}
