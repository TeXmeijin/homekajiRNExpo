# 概要

家事に特化したToDoリストアプリ「褒め家事」

# 技術

- ReactNative
- TypeScript
- TSX

## Testing

- @testing-library/react-native
- *.spec.tsxファイルでテストを書く
- View層のテストはできるだけロジックをHookに切り出したり、イベントハンドラをProps経由で受け取ることでjest.fnで差し替え可能にする
- ロジックのテストはHookに対して行う
  - Hookの実装をする際はPublicにする意味のある値のみReturnする