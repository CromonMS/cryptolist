# frozen_string_literal: true

# Migrate db
namespace :db do
  require 'sequel'
  DB = Sequel.connect 'sqlite://db/mscanalysis.sqlite3'

  desc 'Generate migration'
  task :generate, [:name] do |_, args|
    name = args[:name]
    abort('Missing migration file name') if name.nil?

    content = <<~STR
      # frozen_string_literal: true

      Sequel.migration do
        change do
        end
      end
    STR

    timestamp = Time.now.strftime('%Y%m%d%H%M%S')
    filename = File.join('db/migrations/', "#{timestamp}_#{name}.rb")
    File.write(filename, content)
    puts "Generated: #{filename}"
  end

  desc 'Run migrations'
  task :migrate, [:version] do |_, args|
    Sequel.extension :migration
    if args[:version]
      puts "Migrating to version #{args[:version]}"
      Sequel::Migrator.apply(DB, 'db/migrations', target: args[:version].to_i)
    else
      puts 'Migrating to latest'
      Sequel::Migrator.apply(DB, 'db/migrations')
    end
  end

  desc 'Rollback migration'
  task :rollback, [:step] do |_, args|
    Sequel.extension :migration
    step = args[:step] ? Integer(args[:step]) : 1
    version = 0

    target_migration =
      DB[:schema_migrations].reverse_order(:filename)
                      .offset(step)
                      .first
    if target_migration
      version = Integer(target_migration[:filename].match(/([\d]+)/)[0])
    end

    Sequel.extension :migration
    Sequel::Migrator.apply(DB, 'db/migrations', version)
  end
end

