import {Title} from '../../../components/Title'
import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination page={999}>
      <h2>無双できる年齢</h2>
      <p>マッチングアプリと比較すると結婚相談所の年齢層はやや高めである。男性は40歳前後、女性は30歳前後の会員が多い。当然ながらこの年齢層はライバルも多い。別に戦っているわけではないが、他者よりも秀でる何かがなければ苦戦するかもしれない。</p>
      <p>男性はどの年齢だろうと若い女性に惹かれる。結婚相談所において20歳代の女性は希少なので申し込みが殺到する。逆に女性は年齢が近い男性に惹かれるが、30歳前半の男性も希少なので申し込みが殺到する。30歳を例に挙げると男女比は女性会員のほうが２倍多い。</p>
      <Image href={'/2023/nanocloudx/nanocloudx2.png'} widthPercentage={85} description={'IBJにおける成婚のしやすさグラフ(100%が平均値) [^4]'} />
      <p>結論すると、<strong>20歳代の女性と30歳前半の男性は無双できる</strong>可能性が高い。この年齢層で婚活を始める人は少ないので希少性が高く、需要も一番高い。よってバチェラーやバチェロレッテになれるわけだ。</p>
      <p>もちろん若ければ必ず無双できるわけではないし、逆にライバルの多い年齢層でも諦める必要は全くない。年齢関係なく自分磨きはできるだけ頑張った方がいいだろう。</p>
      <h2>婚活開始前の準備</h2>
      <p>結婚相談所に入会すれば誰でもすぐに結婚できるとは言っていない。婚活を鉱山に例えるならば、結婚相談所はツルハシであり、実際に掘るのは自分自身の努力である。</p>
      <p>女性の場合、<strong>夢を見過ぎ</strong>のケースが考えられる。「東大京大卒」で「医者や大手商社」で「長男以外」で「身長180cm以上」で「年収1000万円以上」で「イケメン」で「年齢が近い」男性が迎えに来てくれると妄想していないだろうか。そんなやつはまず存在しない。もし奇跡的に存在したとしても大抵既婚だろうし、未婚なら何かしら問題のあるやつだ。そもそも超ハイスペ男があなたを選ぶ理由があるのだろうか。<strong>女性は現実を見よう</strong>。</p>
      <p>男性の場合、<strong>だらしない</strong>ケースが考えられる。毎日風呂に入っているか？毎日歯磨きしているか？数ヶ月以内に美容室で髪を切ったか？着ている服は清潔感があるか？相手の目を見て話せるか？いまだにママの言うこと聞いて行動していないか？40〜50歳なのに20歳代にばかり申し込んでいないか？？？信じられないだろうがそういう男性は一定存在する。当然のことを当然のようにやっていれば大丈夫なのだ。<strong>男性は鏡を見よう</strong>。</p>
      {/*<p>平均的な男性でも許容できるようになった女性と、当然のことを当然のようにできるようになった男性が、婚活のスタートラインに立てる。あなたは準備できていますか？</p>*/}
    </Pagination>
  )
}
