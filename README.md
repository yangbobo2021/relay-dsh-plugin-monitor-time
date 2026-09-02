# Relay Time Monitor Bundle for DeepSeek Harness

[![npm version](https://img.shields.io/npm/v/relay-dsh-plugin-monitor-time?label=npm)](https://www.npmjs.com/package/relay-dsh-plugin-monitor-time)
[![CI](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-time/actions/workflows/ci.yml/badge.svg)](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-time/actions/workflows/ci.yml)
[![MIT license](https://img.shields.io/github/license/yangbobo2021/relay-dsh-plugin-monitor-time)](LICENSE)

English | [中文](README.zh.md)

This extension adds the discoverable `time.deadline` Monitor Bundle Type and the
`relay_schedule_timer` convenience tool to Relay. Install it with Relay Events and
Monitor Core. The extension reads only the host clock and supports English and
Simplified Chinese catalog metadata.

Install the exact public release with the required Relay plugins:

```bash
npx @deepseek-ai/dsh@0.1.2-alpha.3 plugin --profile web add --save-exact \
  relay-dsh-plugin-events@0.2.1 \
  relay-dsh-plugin-monitors@0.3.0 \
  relay-dsh-plugin-monitor-time@0.1.0
```

Git source is also installable for release verification:

```bash
npx @deepseek-ai/dsh@0.1.2-alpha.3 plugin --profile web add --save-exact \
  github:yangbobo2021/relay-dsh-plugin-monitor-time#v0.1.0
```

See [SPEC.md](SPEC.md) and [delivery scenarios](docs/acceptance-scenarios.md).
