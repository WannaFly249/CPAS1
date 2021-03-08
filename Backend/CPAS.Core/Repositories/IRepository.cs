using System.Collections.Generic;
using System.Threading.Tasks;

namespace CPAS.Core.Repositories
{
    public interface IRepository<T> : IReadOnlyRepository<T> where T : class
    {
        T Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        void BulkInsert(ICollection<T> items);
        void BulkDelete(ICollection<T> items);
        void BulkUpdate(ICollection<T> items);
        Task<int> SaveChangeAsync();
    }
}
