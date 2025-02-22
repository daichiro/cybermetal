import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'happo31'} pageCount={4}>
      <h3>生体認証</h3>
      <p>PINやパターンで十分という人は気にしなくていいやつです。</p>
      <p>最近の端末は安い端末であっても指紋認証は載っていることが多い気がします。端末間で違うことが多いのは 画面内指紋認証 か 指紋センサー
        かの違いや、指紋センサーである場合はセンサーがどこに配置されているか(側面か裏側が多い) でしょうか。</p>
      <p>また重要なこととして、<strong>搭載はされていても端末によってセンサーの質や処理能力の違いなどで触れた瞬間に解除してくれる端末もあれば、少し触り続けないと解除されない端末</strong>もあるので、もし快適に指紋認証を使いたければ実際に触ってみるしかないです。
      </p>
      <p>顔認証はなんちゃってなことが多いのでここも期待しない方がよい。(Pixel 8は比較的実用的な早さだと思うけど)</p>
      <h3>防水防塵</h3>
      <p>IP6Xとかって書いてあるやつです。どうでもいいと思います。風呂でスマホを使うな。まあ位置ゲーやるような人は気にしとくといいのかな。</p>
      <h3>eSIM 対応</h3>
      <p>物理 eSIM を刺さなくてよくなるやつ。物理 SIM と組み合わせて複数待ち受け[3]なんかが出来る端末もあります。最近は結構対応しているキャリアが増えてきてるので一応見ておくといいかも。僕が使っている
        IIJmio のギガプラン[4]では、通話 eSIM が対応のドコモ回線に最近対応したので物理SIMから乗り換えました。</p>
      <p>特に物理SIMと通信速度などの違いなどはありませんが、やっぱり SIM の郵送を待たなくていい && 解約したときに SIM
        を返さなくていいといった利点は大きいので、こういう便利なものはもっと普及すべきだと思います。</p>
      <h3>ベンチマークスコア (見なくていい)</h3>
      <p><strong>見なくていいです。</strong></p>
      <p>もう一回書きます。</p>
      <p style={{fontSize: '1.5rem'}}><strong>マジで見なくていい。</strong></p>
      <p>まずベンチマークというもの自体が「一定時間端末に最高負荷を掛け続けたときの処理能力」を見ているにすぎないわけですが、そもそもスマートフォンでずーーーーっと最高負荷を掛け続けるようなシチュエーションは現実的ではないわけです。
        そういう使い方をする人がいたら名乗り上げてほしい。ビンタするので。</p>
      <p>じゃあなんでこういう記事が巷にあふれているかというと「それが一番分かりやすく端末を比較できるから」です。しかし、実際にはこの数値は前述の理由により実使用時の快適さを表さないことが大半です。</p>
    </Pagination>
  )
}
