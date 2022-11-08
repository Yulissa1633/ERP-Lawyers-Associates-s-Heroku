var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("GetAllPolicy",
      builder =>
      {
          builder.WithOrigins("http://localhost:4200", "http://localhost:4200/login", "https://erplawyerswebapp.vercel.app/", "https://erplawyerswebapp.vercel.app")
                              .AllowAnyHeader()
                              .AllowAnyMethod();//PUT, PATCH, GET, DELETE
      });
});

//Scaffold-DbContext "Server=DESKTOP-C9OHV6H\SQLExpress;Database=ERP Collections;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -f

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseRouting();

app.UseCors("GetAllPolicy");

app.MapControllers();

app.Run();
