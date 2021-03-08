using CPAS.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace CPAS.Data.Repositories.Generic
{
    public abstract class ReadOnlyGenericRepository<T> : IReadOnlyRepository<T> where T : class
    {
        private readonly CarparkDbContext _context;

        protected ReadOnlyGenericRepository(CarparkDbContext dbContext)
        {
            _context = dbContext;
        }

        public async Task<ICollection<T>> FindByAsync(Expression<Func<T, bool>> predicate)
        {
            var query = _context.Set<T>().Where(predicate).AsQueryable().AsNoTracking();
            return await query.ToListAsync();
        }

        public async Task<ICollection<T>> GetAllAsync()
        {
            var query = _context.Set<T>().AsQueryable<T>().AsNoTracking();
            return await query.ToListAsync();
        }

        public async Task<T> GetAsync(Expression<Func<T, bool>> predicate)
        {
            var query = _context.Set<T>().AsQueryable<T>().AsNoTracking();
            return await Task.FromResult(query.Where(predicate).FirstOrDefault());
        }
    }
}
