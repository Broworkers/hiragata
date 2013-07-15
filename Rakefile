rule ".html" => ".haml" do |t|
  system "haml #{t.source} #{t.name}"
end

task :clear do
  Dir['**/*.html'].each {|file| rm file }
end

task default: "index.html"
