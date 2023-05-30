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
const deviceId = 'eki5WarV4jezQl5MVgKgUR1z/gz/QWq5SBa2f2YWlbjMxZKA0hAvyRHQYkufW+8lXgmG9hAsSPoh4xUfO4wD056KRrj5Cg7yi8KJ+fIGYOFCYETCRfZWYppzktd+Vyc20l8aWbVbjhxJ5pwdnxUJH7D8k/yzeYNvJR/bUEqz3WO1hf/bxXd/RycxAnhAF+kwc2J71UZAmv4/0BBb36b7lQ0iEU3PbDJTohbhAJyLq3EGWMe/LH6+h3yrGmc='
const key = 'XWY23O/tmsnN/ZWG06r3+GeyXrZUvXaiOAziqTcZgapgf09tKz5OP7dXi89dHUENQ2rR5MIozRGU/xC52P5z1gmi1s++tV55J5vu5F9UkuzH4WjGVyIPLJqMjcXe+9JhUa5S24NgDxbEYRLT5O3ArLA3UkUbpfLJKRm9otjacAw='
const nonce = 'usOnDQ29x9oVS/8RkNXU22E+DV7Bonn1tlQxkjZ52GzsZFxmaH0J8OYtV7LOZKN5iZGEKh2Z5zGBvKHoO7N2lyRWfeU9s57iauTuGX1dKQyXzs3APSUaJaTz4SZodDY5j8EZxfvPwAjJR61pvRyxI5d99eRQQ4XKa8q+Syk9xnw='
test('getMachineId from node', (t) => {
  t.log(decryptDeviceId(privateKeyStr, deviceId, key, nonce))
  t.is(sum(1, 2), 3)
})
