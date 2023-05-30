import test from 'ava'
import { sum,  getSysInfo, getMachineId, decryptDeviceId } from '../index.js'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})

test('getSysInfo from native', (t) => {
  t.log(getSysInfo())
  t.is(sum(1, 2), 3)
})
const publickeyStr = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDj5IMcOeacJkQmWDSh32p5azaC
qemVcrjRl2LuzrbkioBHcpdvLNgUGtgDDmN6nMSEaMeKcaGUyMsaxGOw8MScLaHv
ftyC0Och00jokwDaYPTq5YGHW4POzmjEPHGA/xh1KXyMmcqJCC1rAdc/MJHnxqoS
mYi+rFMB0sUK3XqrOwIDAQAB
-----END PUBLIC KEY-----
`
const privateKeyStr= `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQDj5IMcOeacJkQmWDSh32p5azaCqemVcrjRl2LuzrbkioBHcpdv
LNgUGtgDDmN6nMSEaMeKcaGUyMsaxGOw8MScLaHvftyC0Och00jokwDaYPTq5YGH
W4POzmjEPHGA/xh1KXyMmcqJCC1rAdc/MJHnxqoSmYi+rFMB0sUK3XqrOwIDAQAB
AoGAR/zBJcNsg1rbIDmwtol6esxRNckyjhDlLN/jUohd4aeWifs6ttW1k/Q+1AhR
iEPJGAJ5NdRbNEKRVe0/iH8lu48oN6jQkR3d3SoSnTuUDkp0X7THzyeRLPqZVRSb
sBWpDrPltA/3LI8g9mvj+D7RWMwQLnCEZTwOtQMv+eSOH4ECQQD+gXlpNHQwCZrs
5CCgJe37GmFCtxNpbLcnZPYC86rUG/x04gQAOdqQDvV4u+cz2tyryDiWItAGHuEL
D2MgNHKhAkEA5TsJuKlkvVHUEHckBe6pPpI4NEUZaOxGUwV9xbyY/T4nrARDVHLs
K+0GjY3AeEGFqK7SzsIix0uvMBDnEjpsWwJAV+aJ818NfgXjP0wvRIC1KBPdYbhv
eOr2eyGwoiZcavPbhtcFALr6lOTFvVRQryU5MA9wE9KkPGjv2u0OlHHo4QJBAMit
vL77HQRYxMx9YP4IiAYNQEMSU0J1xsMbxZX8m/roFRcUzFT8HyH9aYU3Gc6tnfOk
yUzUzFmpOn9b7M8aco0CQCIhnJ4VpnhYnm29LGeMWqrVKXN24TVgqZUcilLXQzqa
gys3YgTC3/6UMWpEqATMAqy0z7vYMcAKXGxOvTivAZs=
-----END RSA PRIVATE KEY-----`
test('getMachineId from native', (t) => {
  t.log(getMachineId(publickeyStr))
  t.is(sum(1, 2), 3)
})
const deviceId = 'yD6s30u+juPG8+mt+Pz42f874zrWBGh+qI+SLqcE0J7QYKImQbgtk116XPddLk1rTCdQQhNRejEoKd5JthWMRB3ESvY3a1vy2hOamDk8h1Vpg4igaN4HQPtWEpWU6yYyd3/9zNHaKUxqzp5MUCAFoZAxGfgoOr4sGxA27oBUx+K1PM54EwonV4ILCkGwYRHwDJNoFW1LzuR3MxJmc3e7HZuxW4JoGvjtzEpxOm03GWebVJYCWk77GWs43aM='
const key = 'mMsTU9TXXDx5HwauVJKbkCt+8nefNvS7jq901Fj3PxH/bky19778qjb0EI22WT2R/B5W4uzNrFyHTbIwTY//ITSFB8hqVlad9udkqyCheI08beBHFZ/DXrAcSzh7/i5RM4ObLxHCzRwIF39pvuDnLuQEOrxgnhivsBe8cAa1KQA='
const nonce = 'xqx34D2xvhlWLloMkaGmDcM8lO+Obd9RxqreT5EQO3lNnQWZ2PhxlBm2Pd8IDvjqsjddt7lbW8tGEIxcruQvcMztQ7BWDnAdPxqHjbO4VmW99QmdTHTmfF3Psy7zjBYMwYJZ66YM3t1rGlXWUIl5SR2iNWUo5LAukFrOHSVxAdE='
test('getMachineId from node', (t) => {
  t.log(decryptDeviceId(privateKeyStr, deviceId, key, nonce))
  t.is(sum(1, 2), 3)
})
