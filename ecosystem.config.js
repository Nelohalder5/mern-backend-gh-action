cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [
    {
      name: 'backend-api',
      script: 'src/server.js',
      cwd: '/var/www/backend',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
      },
      error_file: '/var/www/backend/logs/error.log',
      out_file: '/var/www/backend/logs/output.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
EOF