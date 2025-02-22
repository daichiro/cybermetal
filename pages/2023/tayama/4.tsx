import {Image} from '../../../components/Image'
import {Pagination} from '../../../components/Pagination'

export default function Page() {
  return (
    <Pagination author={'tayama'} pageCount={4}>
      <Image href={'/2023/tayama/tayama3.png'} widthPercentage={80} description={'図：複視の構造'}/>
      <p>こうして筆者には外転神経麻痺という診断が下ったのでした。何たる手際の良さ！ソフトウェアエンジニアとして障害対応に追われることもある筆者としては、真因特定の速さに感動を禁じえません。この時点でサイバーメタルチンピラという概念はありませんでしたが、これは何らかの形でアウトプットせねばという気持ちになり、この記事です。</p>
      <p>さて、外転神経がバグっていることはわかったものの、ここからどうするか？ドクターの次の一手は脳のMRI（核磁気共鳴）検査でした。複視の原因として脳卒中など脳の病気が考えられます。仮にこれらが原因だとすると筆者はいつ死んでもおかしくないので、最優先で検査する必要があるわけです。ここで着目すべきは、一番ありそうな原因から先に調べているわけではないということです。おそらく脳がハズレであろうことは素人である筆者にも分かっていました。この症状は10年以上も前からだんだん悪化していったものなので、もし脳卒中だとすると筆者はとっくに死んでいるはずだからです。これはつまり、重要度が低くても緊急度の高いタスクは先に片付けろということですね。合理的！時期は前後しますが、後に予想通りこのMRI検査の結果は正常だと判明することになります。</p>
      <p>MRI検査で脳疾患を除外するとして、その次は何の検査になるでしょうか？ここでドクターから衝撃の一言が放たれます。「これ以上は眼科では診られない」と。なんでも、眼科の領分は眼球そのものだと。筆者の場合は眼球を動かす筋肉を動かす神経の問題なので、これは神経内科の領分だということです。そんなわけで眼科では経過観察しつつも、同じく聖路加の神経内科に移ります。紹介状を書くまでもなくカルテは共有され、緊急だということでその場で翌日の診療予約も取ってくれました。便利すぎる。</p>
    </Pagination>
  )
}
