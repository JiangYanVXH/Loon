# 半点京豆雨
cron "8 30 16-23/1 * * *" script-path=https://raw.githubusercontent.com/longzhuzhu/nianyu/main/qx/long_half_redrain.js, enable=false, tag=半点京豆雨

# 整点京豆雨
cron "8 0 8-23/1 * * *" script-path=https://raw.githubusercontent.com/longzhuzhu/nianyu/main/qx/long_super_redrain.js, enable=false, tag=整点京豆雨

# >机场签到
# boxjs订阅：https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/evilbutcher.boxjs.json
cron "32 21 * * *" script-path=https://raw.githubusercontent.com/evilbutcher/Quantumult_X/master/check_in/glados/checkin_env.js, tag=机场签到
