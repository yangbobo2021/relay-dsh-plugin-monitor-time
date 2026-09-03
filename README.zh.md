# 面向 DeepSeek Harness 的 Relay Time Monitor Bundle

[![npm 版本](https://img.shields.io/npm/v/relay-dsh-plugin-monitor-time?label=npm)](https://www.npmjs.com/package/relay-dsh-plugin-monitor-time)
[![CI](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-time/actions/workflows/ci.yml/badge.svg)](https://github.com/yangbobo2021/relay-dsh-plugin-monitor-time/actions/workflows/ci.yml)
[![MIT 许可证](https://img.shields.io/github/license/yangbobo2021/relay-dsh-plugin-monitor-time)](LICENSE)

[English](README.md) | 中文

本扩展为 Relay 增加可发现的 `time.deadline` Monitor Bundle Type 和
`relay_schedule_timer` 便捷工具，需要与 Relay Events、Monitor Core 一起安装。
扩展只读取主机时钟，并提供英文和简体中文目录信息。

使用公开正式版本安装，并同时安装所需的 Relay 插件：

```bash
npx @deepseek-ai/dsh@0.1.2-rc.1 plugin --profile web add --save-exact \
  relay-dsh-plugin-events@0.2.2 \
  relay-dsh-plugin-monitors@0.3.1 \
  relay-dsh-plugin-monitor-time@0.1.1
```

也可以使用固定 Git 标签验证安装：

```bash
npx @deepseek-ai/dsh@0.1.2-rc.1 plugin --profile web add --save-exact \
  github:yangbobo2021/relay-dsh-plugin-monitor-time#v0.1.1
```

同一制品继续兼容已审计的 DSH `0.1.2-alpha.3` Profile。

详见 [SPEC.md](SPEC.md) 和[交付验收场景](docs/acceptance-scenarios.md)。
