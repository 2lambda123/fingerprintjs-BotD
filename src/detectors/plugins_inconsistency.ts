import { BotKind, BrowserKind, ComponentDict, DetectorResponse, State } from '../types'

export function detectPluginsLengthInconsistency({
  pluginsLength,
  browser
}: ComponentDict): DetectorResponse {
  if (pluginsLength.state !== State.Success || browser.state !== State.Success) return
	const { isAndroid, browserKind } = browser.value
  if (browserKind !== BrowserKind.Chrome || isAndroid) return
  if (pluginsLength.value === 0) return BotKind.HeadlessChrome
}
