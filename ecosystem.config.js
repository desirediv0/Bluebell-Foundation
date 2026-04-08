
module.exports = {
    apps: [
        {
            name: "Bluebell-Foundation",
            cwd: "/root/Bluebell-Foundation",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 7004
            },
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "800M",
            error_file: "/root/.pm2/logs/Bluebell-Foundation-error.log",
            out_file: "/root/.pm2/logs/Bluebell-Foundation-out.log",
            log_date_format: "DD/MM/YYYY HH:mm:ss"
        }
    ]
};